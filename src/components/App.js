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
        page: 1,
        showModal: false,
        isLoading: false,
    };

    handleFormSubmit = queryFromSearchbar => {
        console.log('queryFromSearchbar ', queryFromSearchbar)
        this.setState({ searchQuery: queryFromSearchbar });
    };

    componentDidUpdate(prevProps, prevState) {
        const prevPage = prevState.page;
        const nextPage = this.state.page;
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        console.log('prevProps ', prevProps)
        console.log('prevPage ', prevPage)
        console.log('nextPage ', nextPage)
        console.log('prevQuery ', prevQuery)
        console.log('nextQuery ', nextQuery)

        if (prevQuery !== nextQuery) {
            getSearch(nextQuery)
                .then(hits => this.setState({ hits }))
                .catch(error => console.log(error));
        }
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    loadMore = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }));
    };

    render() {
        const { hits, isLoading } = this.state;
        return (
            <div>
                {/* {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <style>{'body { background-color: teal; }'}</style>
                        <Searchbar onSubmit={this.handleFormSubmit} />
                        <ImageGallery images={hits} />
                    </Modal>
                )} */}

                <style>{'body { background-color: teal; }'}</style>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery images={hits} />
                <div className="load-more">
                    <button onClick={this.loadMore} className="btn-grad">
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            </div>
        );
    }
}