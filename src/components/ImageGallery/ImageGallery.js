
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {

    console.log('received images', images);
    console.log('images.largeImageURL', images.largeImageURL);

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