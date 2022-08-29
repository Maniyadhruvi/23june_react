import React,{Component}from 'react'

export default class StateMng extends Component {
 constructor(){
    super()
    this.state={
        count:0
    }
 }
 handlestate=()=>{
    this.setState({count:this.state.count +1})
 }
 Decrement=()=>{
    this.setState({count:this.state.count -1})
 }
 render(){
    return(
        <>
        <center>
            <h1>Value:{this.state.count}</h1>    
            <button onClick={this.handlestate}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
        </center>
        </>
    )
 }
}
