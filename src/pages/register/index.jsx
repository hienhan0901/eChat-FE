import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'

export default function Register(props) {
    

    return (
        <>
            <div className="registerContainer">
                <form className="registerForm">
                    <input type="text" placeholder='Username' require className='registerInput' />
                    <input type="password" placeholder='Password' require className='registerInput' />
                    <input type="password" placeholder='Confirm password' require className='registerInput' />
                    <button type='submit' className='registerButton'>Sign Up</button>
                    <span className=' registerSpan'>Already have an account?&nbsp;
                        <Link to='/login' className='registerRegisterLink'>Log in</Link>
                    </span>
                </form>
            </div>
        </>
    )
}
