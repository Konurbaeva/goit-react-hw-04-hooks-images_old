import { Component } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";


// FULL https://pixabay.com/api/?key=25748459-63f23aee85add1030efa422f3&q=cat&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = "https://pixabay.com/api/"
const API_KEY = "25748459-63f23aee85add1030efa422f3"
const query = "?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12";


export class App extends Component {
    state = {
        hits: [],
    };

    async componentDidMount() {
        const response = await axios.get(`?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        this.setState({ hits: response.hits });
    }

    async handleSubmit() {
        console.log('handleSubmit: ')
    }

    render() {
        const { id, webformatURL, largeImageURL } = this.state;
        return (
            <div>
                <Searchbar onSubmit={this.handleSubmit} />
                <ImageGallery id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
            </div>
        );
    }
}