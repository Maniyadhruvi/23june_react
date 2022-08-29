import React, { createContext, useContext } from 'react'
import B from './B'
const name = { "name": "dhruvi" }
const FirstName = createContext("")

export default function A() {
    return (
        <div>
            <h1>A</h1>
            <FirstName.Provider value={name}>
                <B />
            </FirstName.Provider>
        </div>

    )
}
export { FirstName }