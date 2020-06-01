import React from 'react';
import '../styles/Modal.css';

export default function Modal(props) {
    return (
        props.isModalOpen &&
        <section className="modal-container">
            <div className="modal-box">
                <span className="close-modal" onClick={props.showModal}>X</span>
                {props.children}
            </div>
        </section>
    )
}
