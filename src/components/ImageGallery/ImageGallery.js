import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";


function ImageGallery({ hits }) {

    return (<ul className="gallery">
        {hits.map(hit => (
            <>
                <ImageGalleryItem src={hit.webformatURL} />
            </>
        ))}
    </ul>);
}


export default ImageGallery;