
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {
    return (
        <ul>
            {images.map(({ webformatURL, tags }) => (
                <ImageGalleryItem
                    webImage={webformatURL}
                    description={tags}
                />
            ))}
        </ul>
    );
}

export default ImageGallery;