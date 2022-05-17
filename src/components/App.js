import { Component } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";


// FULL https://pixabay.com/api/?key=25748459-63f23aee85add1030efa422f3&q=cat&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = "https://pixabay.com/api/"
const API_KEY = "25748459-63f23aee85add1030efa422f3"
const query = "cat";


export class App extends Component {
    state = {
        hits: [],
        value: '',
    };

    async componentDidMount() {
        const response = await axios.get(`?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        console.log(' response.data.hits: ' + JSON.stringify(response.data.hits));
        this.setState({ hits: response.data.hits });
    }

    async handleChange(e) {
        this.setState({ value: e.target.value });
    }

    async handleSubmit(e) {
        console.log('A name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Searchbar onSubmit={this.handleSubmit} />
                <ImageGallery hits={this.state.hits} />
            </div>
        );
    }
}
