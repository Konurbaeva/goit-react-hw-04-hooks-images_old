// function ImageGalleryItem({ src }) {
//     return (
//         <li className="gallery-item">
//             <img src={src} alt="" />
//         </li>);
// }

function ImageGalleryItem({ key, webImage, description }) {
    return (
        <li className="gallery-item" key={key} >
            <img src={webImage} alt={description} />
            {webImage}
        </li>);
}


export default ImageGalleryItem;