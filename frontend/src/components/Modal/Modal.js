import React from 'react';
import './Modal.css';

const modal = props => (
    <div className="modal">
        <header className="modal-header"><h1>{props.title}</h1></header>
        <section className="model-content">
            {props.children}
        </section>
        <section className="model-actions">
            {props.canConfirm && <button className="btn" onClick={props.onConfirm}>Confirm</button>}
            {props.canCancel && <button className="btn" onClick={props.onCancel}>Cancel</button>}
        </section>
    </div>
);

export default modal;