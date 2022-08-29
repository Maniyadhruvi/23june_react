import React, { useReducer } from 'react'
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
export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, InitialState)
    return (
        <>
            <h1>Count :{state.count}</h1>
            <button onClick={() => dispatch({ 'type': 'incr' })}>Increment</button>
            <button onClick={() => dispatch({ 'type': 'decr' })}>Decrement</button>


        </>
    )
}