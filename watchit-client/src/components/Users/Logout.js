import React from 'react';
import {useAuth0} from '@auth0/auth0-react'

const Logout = () => {
    const {logout, isAuthenticated} = useAuth0();
    

return (
    //conditionally includes an element
    isAuthenticated && (
        <button class="btn info"onClick={() => logout()}>
        Log Out
        </button>
    
    )
)
    
}
export default Logout;