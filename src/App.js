import React from "react"




class App extends React.Component{
    state={
        hour:0,
        minute:0,
        second:0,
        btnDisabled:false,
        interval:"",
        intervalsStorage:[],
    }

    starClicked=()=>{
    let timer=setInterval(()=>{
            this.setState({
                btnDisabled:true
            })
            const{second, minute, hour}=this.state
            if(second===59){
                if(minute===59){
                    this.setState({
                        minute:0,
                        second:0,
                        hour:hour+1,
                    })
                }else{
                    this.setState({
                        minute:minute+1
                    })
                }
                this.setState({
                    // minute:minute+1,
                    second:0
                })
            }else{
                this.setState({
                    second:second+1
                })
            }
        },1000)
        this.setState({
            interval:timer
        })
    }

    stopClicked=()=>{
        clearInterval(this.state.interval)
        this.setState({
            btnDisabled:false
        })
    }

    intervalClicked=()=>{
        const{intervalsStorage, hour, minute, second,}=this.state
        intervalsStorage.push(`${hour}:${minute}:${second}`)
        this.setState({intervalsStorage})
    }

    clearClicked=()=>{
        this.stopClicked()
        this.setState({
            hour:0,
            minute:0,
            second:0,
            intervalsStorage:[]
        })
    }

    render(){
        const{second, minute, hour, btnDisabled, intervalsStorage}=this.state
        return<div>
            <div className="timer-container">
                <h1 className="mb-4"><span>Online</span>Stopwatch</h1>    
                <div className="timer-col">
                    <p className="timer-hours">{hour}</p>    
                    <p className="timer-label">Hours</p>    
                </div>
                <div className="timer-col">
                    <p className="timer-minutes">{minute}</p>
                    <p className="timer-label">Minutes</p>    
                </div>
                <div className="timer-col">
                    <p className="timer-second" >{second}</p>    
                    <p className="timer-label">Seconds</p>
                </div>
            </div>
            <div className="timer-container text-center">
                <div className="timer-btn">
                    <button className="btn btn-success" onClick={this.starClicked} disabled={btnDisabled}>Start</button>
                </div>    
                <div className="timer-btn">
                    <button className="btn btn-danger" onClick={this.stopClicked} >Stop</button>
                </div>    
                <div className="timer-btn">
                    <button className="btn btn-secondary" onClick={this.intervalClicked} disabled={!btnDisabled}>Interval</button>
                </div>    
                <div className="timer-btn">
                    <button className="btn btn-info" onClick={this.clearClicked}>Clear</button>
                </div>     
            </div>
            <div className="timer-container-intervals text-center">
                {intervalsStorage.map((item, index)=><p>{index+1}=&gt; {item}</p>)}
            </div>
        </div>
    }
}


export default App