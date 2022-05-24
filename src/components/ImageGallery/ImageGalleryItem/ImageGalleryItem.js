// function ImageGalleryItem({ src }) {
//     return (
//         <li className="gallery-item">
//             <img src={src} alt="" />
//         </li>);
// }

function ImageGalleryItem({ webImage, description }) {
    return (
        <li className="gallery-item" >
            <img src={webImage} alt={description} />
        </li>);
}


export default ImageGalleryItem;