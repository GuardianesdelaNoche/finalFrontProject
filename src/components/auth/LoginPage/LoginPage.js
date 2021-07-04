import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage () {
    return (
        <div>
            Login Page
            <div>
            <Link to="/events">Events</Link>
            </div>
            <div>
            <Link to="/admin">User Panel</Link>
            </div>
        </div>
    )
}

export default LoginPage;