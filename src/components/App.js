import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

import { getSearch } from "services/api"

export class App extends Component {
    state = {
        hits: [],
        searchQuery: '',
        page: 1,
        currentPage: 1,
        showModal: false,
        isLoading: false,
        totalHits: 0,
        errorMsg: '',
        per_page: 5,
    };

    handleFormSubmit = queryFromSearchbar => {
        console.log('queryFromSearchbar ', queryFromSearchbar)
        this.setState({ searchQuery: queryFromSearchbar, hits: [], page: 1 });
    };

    componentDidUpdate(prevProps, prevState) {
        const prevPage = prevState.page;
        const nextPage = this.state.page;
        const prevsearchQuery = prevState.searchQuery;
        const searchQuery = this.state.searchQuery;

        if (prevPage !== nextPage || prevsearchQuery !== searchQuery) {
            this.loadResults();
        }
    }

    loadResults = () => {
        const { page, per_page } = this.state;

        this.setState({ isLoading: true });

        getSearch(this.state.searchQuery, per_page, page)
            .then((hits) => {
                this.setState(prevState => ({
                    hits: [...prevState.hits, ...hits], errorMsg: ''
                }))
            })
            .catch((error) =>
                this.setState({
                    errorMsg: 'Error while loading data. Try again later.'
                })
            )
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };


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

    openLargeModal = () => {
        console.log('large modal opened');
    }

    render() {
        const { hits, isLoading, showModal } = this.state;
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
                {hits && <ImageGallery images={hits} onClick={this.openLargeModal} />}
                {showModal && <Modal onClose={this.toggleModal} />}
                {/* <img src={this.props.largeImageURL} alt={this.props.description} /> */}
                <div className="load-more">
                    <button onClick={this.loadMore}>
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
                {hits.length > 0 ? <ImageGallery images={hits} onClick={this.openLargeModal} /> : 'No results'}
            </div>
        );
    }
}