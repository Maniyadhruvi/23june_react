import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Table } from 'react-bootstrap'
export default function Server() {
    const [name, setName] = useState("")
    const state = useSelector((state) => state.users)
    console.log(state)
    const dispatch = useDispatch()

    const addData = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * (0 - 100 + 1)) + 100

        return dispatch({
            type: 'add',
            playload: { id, name }
        })
    }

    const deleteData = (id) => {
        return dispatch({
            type: 'del',
            playload: id
        })
    }

    const editData = (id) =>{
        
        return dispatch({
            type:'edit',
            playload:id

        })
    }
return (
    <center>
        <div className='container'>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <form method="post">
                <input type="text"  onChange={(e) => setName(e.target.value)} />
                
                <button className='btn btn-info mb-2' onClick={addData}>ADD</button>
            </form><br/>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Action</td>
                </tr>
                {
                    state && state.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => editData(item.id)}>EDIT</button>
                                <button className='btn btn-danger' onClick={() => deleteData(item.id)}>DELETE</button>

                            </td>
                        </tr>
                    )

                }
                
            </table>
            
        </div>
      </div>
    

    </div>
    </center>
)
}