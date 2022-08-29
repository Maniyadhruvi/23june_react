import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(name)
    const handleClick = () => {
        const data = [name, email]
        console.log(data);
    };

    const handlesubmit=(e)=>{
        e.preventDefault();
        const data ={name,email};
        console.log(data);
    };

    return (
        <center>
            <div>
                <h1>Form</h1>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />

                    <br />
                    <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <button onClick={handleClick}>Save</button>
                </form>
            </div>
        </center>
    );
}
