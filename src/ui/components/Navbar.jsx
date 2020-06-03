import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ to, showModal, history, location }) {
    function logOut() {
        history.push('/');
    }
    function register() {
        showModal();
        history.push('/register');
    }
    return(
        <Route
            path={to}
            children={({ match }) => {
                return(
                    <header>
                        <div className="inner-header">
                            <div className="login-options">
                                {
                                    location.pathname !== '/dashboard' ?
                                    <>
                                        <div className="sign-in" onClick={showModal}>Sign in</div>
                                        <div className="register" onClick={register}>Register</div>
                                    </>
                                    : <div className="sign-in" onClick={logOut}>Sign out</div>
                                }
                            </div>
                        </div>
                    </header>
                );
            }}
        />
    );
};

export default withRouter(Navbar);