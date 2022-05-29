import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webImage, openModal, description }) {
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



export default ImageGalleryItem;