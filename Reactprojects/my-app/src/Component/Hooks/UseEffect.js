import React,{useEffect,useState} from 'react'


export default function UseEffect() {
    const [count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    useEffect(()=>{
        // console.log('render...')
        for(var i=0;i<100000000;i++){}
    },[count,count1])
    return(
        <div>
            <h1>count :{count}</h1>
            <h1>count :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <button onClick={()=>setCount1(count+1)}>Click</button>
        </div>
    )
}

