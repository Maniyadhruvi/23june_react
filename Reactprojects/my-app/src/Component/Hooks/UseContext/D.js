import React,{useContext} from 'react'
import { FirstName } from './A'

export default function D() {
    console.log(FirstName)
    const firstname = useContext(FirstName)
  return (
    <div>
        <h1>D</h1>
        <h1>Hello {firstname.name}</h1>
    </div>
  )
}
