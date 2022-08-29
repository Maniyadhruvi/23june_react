import React, { useContext } from 'react'
import { FirstName } from './A'
import D from './D'

export default function C() {
    const firstname = useContext(FirstName)
    return (
        <div>
            <h1>C</h1>
            <D  />
        </div>
    )
}
