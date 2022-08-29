import React from 'react'
function Demo(){
    return <h1>Hello...</h1>
}

export default function FunctionComp(props) {
  return (
    <div>
        Name is :{props.name}
        <Demo/>

    </div>
  )
}
