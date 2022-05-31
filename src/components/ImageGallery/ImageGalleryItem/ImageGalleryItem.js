import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webImage, openModal, description }) {
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                className={styles.ImageGalleryItem_image}
                src={webImage}
                alt={description}
                onClick={openModal}
            />
        </li>
    );
}


ImageGalleryItem.propTypes = {
    onSubmit: PropTypes.func,
    webImage: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
};