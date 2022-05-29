import styles from './ImageGalleryItem.module.css';

// function ImageGalleryItem({ webImage, openModal, description }) {
//     return (
//         <li>
//             <img
//                 src={webImage}
//                 alt={description}
//                 onClick={openModal}
//             />
//         </li>
//     );
// }

function ImageGalleryItem({ webImage, openModal, description }) {
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                src={webImage}
                alt={description}
                onClick={openModal}
            />
        </li>
    );
}



export default ImageGalleryItem;