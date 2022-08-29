import React from 'react'
import { useSelector } from 'react-redux';


export default function Demo1() {
    const count = useSelector((state) => state.count)
    return (
        <h1>Count :{count}</h1>
    )
}
