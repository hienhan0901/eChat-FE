import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function LoginPage(props) {
    

    return (
        <>
            <div className="loginContainer">
                <form className="loginForm">
                    <input type="text" placeholder='Username' require className='loginInput' />
                    <input type="password" placeholder='Password' require className='loginInput' />
                    <button type='submit' className='loginButton'>Log In</button>
                    <span className=' loginSpan'>Don't have an account?&nbsp;
                        <Link to='/register' className='loginRegisterLink'>Sign up now!</Link>
                    </span>
                </form>
            </div>
        </>
    )
}
