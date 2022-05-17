import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";


function ImageGallery({ hits }) {

    console.log('HITS ID ' + JSON.stringify(hits))

    return (<ul className="gallery">
        {hits.map(hit => (
            <>
                <li>{hit.id}</li>
                <li>{hit.webformatURL}</li>
                <li>{hit.largeImageURL}</li>
                <ImageGalleryItem src={hit.largeImageURL} />
            </>
        ))}
    </ul>);
}


export default ImageGallery;