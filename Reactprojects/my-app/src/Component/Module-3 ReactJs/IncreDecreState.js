import React, { useReducer } from 'react'
import './custom.css';
const reducer = (state, action) => {
    if (action.type == 'incr') {
        return { count: state.count + 1 }
    }
    else if (action.type == 'decr') {
        return { count: state.count - 1 }
    }
}
const InitialState = {
    count: 0
}
export default function IncreDecreState() {
    const [state, dispatch] = useReducer(reducer, InitialState)
    return (
        <>
            <body>
                <center>
                    <h1>React Web</h1><br/>
                    <h2><b></b>{state.count}</h2>
                    <button onClick={() => dispatch({ 'type': 'incr' })}><b>Increment</b></button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => dispatch({ 'type': 'decr' })}><b>Decrement</b></button><br></br><br></br>
                    <button onClick={() => dispatch({ 'type': 'reset' })}><b>Reset</b></button>
                </center>
            </body>
        </>
    )
}
