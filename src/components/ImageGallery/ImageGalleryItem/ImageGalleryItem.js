function ImageGalleryItem({ webImage, openModal, description }) {
    return (
        <li>
            <img
                src={webImage}
                alt={description}
                onClick={openModal}
            />
        </li>
    );
}


export default ImageGalleryItem;