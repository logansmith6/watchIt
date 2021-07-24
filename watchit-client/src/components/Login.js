import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='login'>
            <form className='login_form'>
                <input type='name' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                
            </form>
        </div>
    )
}