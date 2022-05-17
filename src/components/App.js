import { Component } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";


// FULL https://pixabay.com/api/?key=25748459-63f23aee85add1030efa422f3&q=cat&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = "https://pixabay.com/api/"
const API_KEY = "25748459-63f23aee85add1030efa422f3"
const query = "cat";


export class App extends Component {
    state = {
        hits: [],
        value: '',
        isLoading: false,
        showModal: true,
    };

    async componentDidMount() {
        const response = await axios.get(`?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);

        this.setState({ hits: response.data.hits });
    }

    async handleChange(e) {
        this.setState({ value: e.target.value });
    }

    async handleSubmit(e) {
        console.log('A name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    async toggleModal(e) {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    }

    render() {
        const { isLoading, showModal } = this.state;

        return (
            <div>
                {/* {showModal && <Modal onClose={this.toggleModal} />} */}

                {showModal && <Modal />}

                <Searchbar onSubmit={this.handleSubmit} />
                <ImageGallery hits={this.state.hits} />
                {isLoading ? <p>Loading...</p> : <Loader />}
            </div>
        );
    }
}
