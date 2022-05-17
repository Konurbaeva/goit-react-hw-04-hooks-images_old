// function ImageGallery({ id, webformatURL, largeImageURL }) {

//     return (<ul className="gallery">
//         {hits.map(hit => (
//           <li>{hit.id}</li>
//           <li>{hit.webformatURL}</li>
//           <li>{hit.largeImageURL}</li>
//         ))}
//     </ul>);
// }

function ImageGallery({ hits }) {

    return (<ul className="gallery">
        {hits.map(hit => (
            <>
                <li>{hit.id}</li>
                <li>{hit.webformatURL}</li>
                <li>{hit.largeImageURL}</li>
            </>
        ))}
    </ul>);
}


export default ImageGallery;