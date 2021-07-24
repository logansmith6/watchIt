import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    
    return (
        <div className='login'><h1 className="login-command">Login</h1>
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
                onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input 
                type='password' 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                type="submit" 
                value="Login"
                className="submit__btn"
                />
                
            </form>
        </div>
    );
};

export default Login;