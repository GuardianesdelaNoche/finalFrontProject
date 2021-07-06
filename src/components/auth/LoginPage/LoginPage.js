import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import './login.css'


function LoginPage () {
    const handleSubmit = (credentials)=>{
        //TO-DO añadir Redux actions
        console.log(credentials)
    } 
    return (
        <body>
            <main class="form-signin">
           
                <h1 className="h title-signin">Welcome to Start</h1>
               
                  
                
                <LoginForm onSubmit={handleSubmit} />
                <Link to="/remember" className="form-label">Forgot your password?</Link>
                <p className="text-muted">New here?
                    <Link to="/register"> Create Account</Link></p>
            </main>           
    
        </body>
    )
}

export default LoginPage;