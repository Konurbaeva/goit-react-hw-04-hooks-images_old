import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
// import Modal from "./Modal/Modal";

export class App extends Component {
    state = {
        hits: [],
        searchQuery: '',
        isLoading: false,
        showModal: true,
        galleryPage: 1,
        error: ''
    };

    handleFormSubmit = queryFromSearchbar => {
        console.log('queryFromSearchbar ', queryFromSearchbar)
        this.setState({ searchQuery: queryFromSearchbar });
    };

    render() {
        //  const { showModal } = this.state;

        return (
            <div>
                <style>{'body { background-color: teal; }'}</style>
                {/* {showModal && <Modal />} */}
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery images={this.state.hits} />
            </div>
        );
    }
}
