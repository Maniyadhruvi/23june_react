import React,{useState} from 'react'
import Demo1 from './Demo1';
import {useSelector,useDispatch} from 'react-redux';
export default function Demo() {
    const count = useSelector((state)=> state.count)
    const dispatch = useDispatch()
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
        <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
    </>
  )
}
