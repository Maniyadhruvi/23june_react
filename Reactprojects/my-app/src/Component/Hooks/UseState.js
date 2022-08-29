import React,{useState} from 'react'

export default function UseState() {
  const [count,setCount]= useState(0)
  const [name,setName]=useState("Dhruvi")
  const handleState=()=>{
    setName("Amisha")
  }


  return(
    <div>
        <h1>Name:{name} </h1>
        <h1>Count:{count}</h1>
        <button onClick={(e)=>setCount(count+1)}>Increment</button>
        <button onClick={(e)=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>handleState()}>Update</button>
    </div>
  )
}
