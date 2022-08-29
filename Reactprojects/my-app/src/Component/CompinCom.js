import React,{Component}from 'react'

function Mycomp() {
  return <h1>Hello My Component</h1>
}

export default class CompinCom extends Component{
    render(){
        return(
            <>
                <div>CompInCom</div>
                <Mycomp/>
            </>
        )
    }
}