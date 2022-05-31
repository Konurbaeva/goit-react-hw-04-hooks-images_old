
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import styles from './ImageGallery.module.css'
import PropTypes from 'prop-types';

export default function ImageGallery({ images, openModal }) {
    return (
        <ul className={styles.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webImage={webformatURL}
                    description={tags}
                    openModal={() => openModal(largeImageURL)}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
};