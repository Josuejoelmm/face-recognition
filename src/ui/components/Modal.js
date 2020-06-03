import React from 'react';
import '../styles/Modal.css';
import SignIn from './SignIn';
import Register from './Register'
import { withRouter } from 'react-router-dom';

function Modal(props) {
    function closeModal() {
        props.showModal();
        props.history.push('/');
    }
    return (
        props.isModalOpen &&
        <section className="modal-container">
            <div className="modal-box">
                <span className="close-modal" onClick={closeModal}>X</span>
                {
                    props.location.pathname === '/register' 
                    ? <Register />
                    : <SignIn />
                }
            </div>
        </section>
    )
}

export default withRouter(Modal)