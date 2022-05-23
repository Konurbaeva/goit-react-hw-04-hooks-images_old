import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";


// function ImageGallery({ hits }) {
//     return (<ul className="gallery">
//         {hits.map(hit => (
//             <>
//                 <ImageGalleryItem src={hit.webformatURL} />
//             </>
//         ))}
//     </ul>);
// }

class ImageGallery extends Component {
    render() {
        return (<ul className="gallery">
            {this.props.hits.map(hit => (
                <>
                    <ImageGalleryItem src={hit.webformatURL} />
                </>
            ))}
        </ul>);
    }
}


export default ImageGallery;