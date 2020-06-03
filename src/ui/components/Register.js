import React from 'react';
import '../styles/SignIn.css';
import { withRouter } from 'react-router-dom';

function Register(props) {
    function logIn() {
        props.history.push('/dashboard');
    }
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
                <input onClick={logIn} type="submit" value="Register" />
            </div>
        </div>
    )
}

export default withRouter(Register);