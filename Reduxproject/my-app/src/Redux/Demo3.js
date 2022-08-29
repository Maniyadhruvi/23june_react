import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export default function Demo3() {
    const count = useSelector((state) => state.count)
  return (
    <h1>Count : {count}</h1>
  )
}
