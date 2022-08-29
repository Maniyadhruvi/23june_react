import {Component} from "react";

class LyfCycle extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log('comp init')
    }
    handle=()=>{
        this.setState({
            count:10
        })
        
    }
    componentDidMount(){
        console.log('component didMount....')
    }
    render(){
        console.log('comp render')
        return <>
            {this.state.count}
            <button onClick={this.handle}>Click</button>
        </>
    }
    componentDidUpdate(){
        console.log('component did update...')
    }
}

export default LyfCycle