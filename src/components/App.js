import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
// import Modal from "./Modal/Modal";

import { getSearch } from "services/api"

export class App extends Component {
    state = {
        hits: [],
        searchQuery: '',
        showModal: false,
    };

    handleFormSubmit = queryFromSearchbar => {
        console.log('queryFromSearchbar ', queryFromSearchbar)
        this.setState({ searchQuery: queryFromSearchbar });
    };

    // componentDidUpdate(prevState) {
    //     const { searchQuery } = this.state;

    //     console.log('prevState', prevState)
    //     console.log('prevState.searchQuery', prevState.searchQuery)
    //     console.log('searchQuery', searchQuery)

    //     if (prevState.searchQuery !== searchQuery) {

    //         getSearch(this.state.searchQuery)
    //         //    .then(hits => this.setState({ hits }))
    //     }
    // }

    componentDidUpdate(prevProps, prevState) {
        const { searchQuery } = this.state;

        console.log('prevState', prevState)
        console.log('prevState.searchQuery', prevState.searchQuery)
        console.log('searchQuery', searchQuery)

        if (prevState.searchQuery !== searchQuery) {
            setTimeout(() => {
                getSearch(this.state.searchQuery)
                    .then(hits => this.setState({ hits }))
                    .catch(error => console.log(error));
            }, 3000);
        }
    }


    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        return (
            <div>
                {/* {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <style>{'body { background-color: teal; }'}</style>
                        <Searchbar onSubmit={this.handleFormSubmit} />
                        <ImageGallery images={this.state.hits} />
                    </Modal>
                )} */}

                <style>{'body { background-color: teal; }'}</style>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery images={this.state.hits} />
            </div>
        );
    }
}
