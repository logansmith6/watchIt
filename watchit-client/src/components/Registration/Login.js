import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    

    return (
        <div className='login'><h1>Login</h1>
            <form className='login__form'>
                <input 
                type='name' 
                placeholder='Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input 
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input 
                type='password' 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="submit" 
                value="Login"/>
                
            </form>
        </div>
    );
};

export default Login;