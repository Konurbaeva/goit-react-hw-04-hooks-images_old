import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
// import Modal from "./Modal/Modal";

import { getSearch } from "services/api"
import Container from "./Container";

export class App extends Component {
    state = {
        hits: [],
        searchQuery: '',
        showModal: false,
        page: 1,
        isLoading: false,
        errorMsg: '',
    };

    handleFormSubmit = queryFromSearchbar => {
        console.log('queryFromSearchbar ', queryFromSearchbar)
        this.setState({ searchQuery: queryFromSearchbar });
    };

    componentDidUpdate(prevProps, prevState) {
        const prevPage = prevState.page;
        const nextPage = this.state.page;

        if (prevPage !== nextPage) {
            this.loadUsers();
        }
    }

    loadUsers = () => {
        const { page } = this.state;

        this.setState({ isLoading: true });

        getSearch(this.state.searchQuery, page)
            .then((hits) => {
                this.setState({ hits: hits, errorMsg: '' });
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

    loadMore = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }));
    };


    handleModalDialog = () => {
        this.toggleModal()
        console.log("cliked");
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };


    render() {
        // const { showModal, isLoading } = this.state;

        const { hits, isLoading, errorMsg } = this.state;
        return (
            <div className="main-section">
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery images={hits} onClick={this.toggleModal} />
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <div className="load-more">
                    <button onClick={this.loadMore} className="btn-grad">
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            </div>
        );
    }
}