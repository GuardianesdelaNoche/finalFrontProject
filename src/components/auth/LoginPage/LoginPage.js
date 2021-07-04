import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';



function LoginPage () {
    const handleSubmit = (credentials)=>{
        //TO-DO añadir Redux actions
        console.log(credentials)
    } 
    return (
        <div>
            <div>
                <Link to="/events">Events</Link>
            </div>
            <div>
                <Link to="/member">User Panel</Link>
            </div>
            <div>
                <LoginForm onSubmit={handleSubmit} />
            </div>

            <div>
                Don't have an account yet?<Link to="/register">Register</Link>
            </div>

            <div>
                <Link to="/remember">Forgot your password?</Link>
            </div>
        </div>
    )
}

export default LoginPage;