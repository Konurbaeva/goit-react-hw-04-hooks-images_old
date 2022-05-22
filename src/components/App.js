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
        searchRequest: '',
        isLoading: false,
        showModal: true,
        galleryPage: 1,
        pokemon: null,
    };


    componentDidUpdate(prevState) {
        const prevSearch = prevState.searchRequest;
        const currentSearch = this.state.searchRequest;

        if (prevSearch !== currentSearch) {
            console.log('search changed')
            getSearch()
                .then(response => console.log(response.json))
                .then(pokemon => this.setState({ pokemon }))
        }
    }

    componentDidMount() {
        const data = getSearch()
        this.setState({ query: data.hits });
    }


    handleSubmit(e) {
        e.preventDefault();
        // const form = e.target;
        // const searchQuery = form;

        // console.log('form.elements: ' + JSON.stringify(form.elements))
        // console.log('form.elements.query.value: ' + JSON.stringify(form.elements.query.value))
        // console.log('e.target.form.input.value: ' + JSON.stringify(e.target.form.input.value))

        // console.log('form.elements.query.value' + form.elements.query.value)
        //  target: form.form
        // 0: input.input
        // value: "cat"
        // const searchQuery = e.target.form.input.value
        // console.log('searchQuery: ' + searchQuery)

        // const searchQuery = e.target.form.input.value
        // console.log('e.target.form.input.value: ' + JSON.stringify(searchQuery))
        // console.log('e.target.input.value: ' + JSON.stringify(e.target.input.value))

        const searchQuery = e.target.value
        this.setState({ query: searchQuery });
    }

    toggleModal(e) {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    }

    render() {
        // const { isLoading, showModal } = this.state;
        const { showModal } = this.state;

        return (
            <div>
                {/* {showModal && <Modal onClose={this.toggleModal} />} */}
                {showModal && <Modal />}
                <Searchbar onSubmit={this.handleSubmit} />
                <ImageGallery hits={this.state.hits} />
                {/* {isLoading ? <p>Loading...</p> : <Loader />} */}
            </div>
        );
    }
}
