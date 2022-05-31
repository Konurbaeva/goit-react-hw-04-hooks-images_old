import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';


// const modalRoot = document.querySelector('#modal-root');

export default function Modal() {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    })

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

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

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};