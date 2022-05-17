function Modal({ onClose }) {
    return (<div className="overlay">
        <div className="modal" onClose={onClose}>
            <img src="" alt="" />
        </div>
    </div>);
}

export default Modal;