import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <div className={styles.Overlay} onClick={this.props.onClose}>
                <div>
                    <img
                        className={styles.ModalImage}
                        src={this.props.largeImageURL}
                        alt={this.props.description}
                    />
                </div>
            </div>
        );
    }
}