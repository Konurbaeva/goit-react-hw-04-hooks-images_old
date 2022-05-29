
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onClick }) {

    return (
        <ul>
            {images.map(({ id, webformatURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webImage={webformatURL}
                    description={tags}
                    onClick={onClick}
                />
            ))}
        </ul>
    );
}

export default ImageGallery;