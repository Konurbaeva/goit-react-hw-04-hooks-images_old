
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {
    console.log('IMAGE GALLERY: ' + JSON.stringify(images))
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