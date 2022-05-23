import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { getSearch } from "services/api";

export class App extends Component {
    state = {
        hits: [],
        query: '',
        isLoading: false,
        showModal: true,
        galleryPage: 1,
    };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const hits = getSearch('Nature');
            this.setState({ hits });
        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { showModal, hits } = this.state;
        console.log('HITS in APP: ###############' + hits)

        return (
            <div>
                {showModal && <Modal />}
                <Searchbar
                    onSubmit={this.handleSubmit}
                    value={this.state.query}
                    // onChange={(e) => this.setState(e.target.value)}
                    onChange={this.handleChange}

                />
                <ImageGallery hits={this.state.hits} />
            </div>
        );
    }
}
