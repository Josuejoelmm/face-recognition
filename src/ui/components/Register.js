import React from 'react';
import '../styles/SignIn.css';

export default function Register() {
    return (
        <div className="sign-in-modal">
            <div>
                <h2>Register</h2>
            </div>
            <div>
                <label>name</label><br/>
                <input type="text"/><br/>
                <label>Email</label><br/>
                <input type="text"/><br/>
                <label>Password</label><br/>
                <input type="text"/><br/>
                <input type="submit" value="Register" />
            </div>
        </div>
    )
}