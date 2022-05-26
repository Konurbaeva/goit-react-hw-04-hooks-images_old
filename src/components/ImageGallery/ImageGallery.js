
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {

    console.log('received images', images);
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