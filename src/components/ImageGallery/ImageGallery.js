import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";


function ImageGallery({ hits }) {

    console.log('HITS ID ' + JSON.stringify(hits))

    return (<ul className="gallery">
        {hits.map(hit => (
            <>
                <ImageGalleryItem src={hit.largeImageURL} />
            </>
        ))}
    </ul>);
}


export default ImageGallery;