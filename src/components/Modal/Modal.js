import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';


// const modalRoot = document.querySelector('#modal-root');
// Inline any this.props into the function declaration using object destructuring

export default function Modal({ onClose, largeImageURL, description }) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    })

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    return (
        <div className={styles.Overlay} onClick={onClose}>
            <div>
                <img
                    className={styles.ModalImage}
                    src={largeImageURL}
                    alt={description}
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