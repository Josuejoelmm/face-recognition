import React from 'react';
import '../styles/SignIn.css';

export default function SignIn() {
    return (
        <div className="sign-in-modal">
            <div>
                <h2>Sign In</h2>
            </div>
            <div>
                <label>Email</label><br/>
                <input type="text"/><br/>
                <label>Password</label><br/>
                <input type="text"/><br/>
                <input type="submit" value="Sign in" />
            </div>
            <span>- OR -</span>
            <h6>Register</h6>
        </div>
    )
}
