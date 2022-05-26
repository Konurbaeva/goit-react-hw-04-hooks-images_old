import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
// import Modal from "./Modal/Modal";

// import { getSearch } from "services/api"

export class App extends Component {
    state = {
        hits: [],
        searchQuery: '',
    };

    handleFormSubmit = queryFromSearchbar => {
        console.log('queryFromSearchbar ', queryFromSearchbar)
        this.setState({ searchQuery: queryFromSearchbar });
    };

    render() {

        return (
            <div>
                <style>{'body { background-color: teal; }'}</style>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery images={this.state.hits} />
            </div>
        );
    }
}
