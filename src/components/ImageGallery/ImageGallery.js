
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {

    return (
        <ul>
            {images.map(({ id, webformatURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webImage={webformatURL}
                    description={tags}
                />
            ))}
        </ul>
    );
}

export default ImageGallery;