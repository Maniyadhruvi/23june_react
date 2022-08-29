import React,{Component} from 'react'

export default class PropsComp extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>Hello{this.props.name}</div>
        )
    }
}