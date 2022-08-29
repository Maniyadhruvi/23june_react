import React from 'react'

// // this is using   jsx
//     const Hello = ()=>{
//         return(
//             <div>
//                 <h1>Hello Bhautika</h1>
//             </div>

//         )
//     }

const Hello = () => {
    return React.createElement('div', { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Dhruvi'))
}
export default Hello

