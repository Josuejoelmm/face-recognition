import React from 'react';
import '../styles/SignIn.css';
import { withRouter } from 'react-router-dom';

function SignIn(props) {
    function logIn() {
        props.history.push('/dashboard');
    }
    function register() {
        props.history.push('/register');
    }
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
                <input onClick={logIn} type="submit" value="Sign in" />
            </div>
            <span>- OR -</span>
            <h6 onClick={register}>Register</h6>
        </div>
    )
}

export default withRouter(SignIn);