import React, { useEffect } from 'react';
import './Signin.css';


const SignIn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='signup'>
            <div className="signup-container">
                <h2>Sign up</h2>
                <div className="signup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Your Password' />
                </div>
                <button>SIGN UP</button>
                <p className="signup-signin">Already have an account? <span>Sign In</span></p>
                <div className="signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>

        </div>
    );
};

export default SignIn;