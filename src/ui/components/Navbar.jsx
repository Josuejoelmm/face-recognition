import React from 'react';
import '../styles/Navbar.css';

export default function Navbar(props) {
    return(
        <header>
            <div className="inner-header">
                <div>
                    <div className="sign-in" onClick={props.showModal}>Sign in</div>
                </div>
            </div>
        </header>
    );
};