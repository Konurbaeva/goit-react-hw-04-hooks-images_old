// function ImageGalleryItem({ src }) {
//     return (
//         <li className="gallery-item">
//             <img src={src} alt="" />
//         </li>);
// }

function ImageGalleryItem({ webImage, description, onClick }) {

    return (
        <li className="gallery-item" >
            <img src={webImage} alt={description} onClick={onClick} />
        </li>);
}


export default ImageGalleryItem;