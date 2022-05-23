import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { getSearch } from "services/api";

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
        this.setState({ searchQuery: queryFromSearchbar });
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const hits = getSearch(this.state.searchQuery)
                .then(response => console.log(response))
                .then(hits => this.setState({ hits: hits }))
                .error(error => console.error(error))

            console.log('GET SEARCH: ' + hits)
            this.setState({ hits });

        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { showModal, hits } = this.state;

        return (
            <div>
                {showModal && <Modal />}
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery hits={hits} />
            </div>
        );
    }
}
