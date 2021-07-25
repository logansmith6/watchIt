import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import './Login.css'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className="submit__btn" onClick={ () => loginWithRedirect()}>
            Login
        </button>
    );
};

export default LoginButton;