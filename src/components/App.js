import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
// import Loader from "./Loader/Loader";
// import Modal from "./Modal/Modal";

import { getSearch } from "services/api"
// import Container from "./Container";

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
        const { searchQuery, page } = this.state;

        console.log('prevState', prevState)
        console.log('prevState.searchQuery', prevState.searchQuery)
        console.log('searchQuery', searchQuery)

        if (prevState.searchQuery !== searchQuery) {
            getSearch(searchQuery, page)
                .then(hits => this.setState({ hits }))
                .catch(error => console.log(error));
        }
        if (prevState.page !== page) {
            this.loadMore();
        }
    }


    handleModalDialog = () => {
        this.toggleModal()
        console.log("cliked");
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

    render() {
        // const { showModal, isLoading } = this.state;

        const { isLoading, errorMsg } = this.state;
        return (
            <div>
                <div className="main-section">
                    <Searchbar onSubmit={this.handleFormSubmit} />
                    <ImageGallery images={this.state.hits} onClick={this.toggleModal} />
                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                    <div className="load-more">
                        <button onClick={this.loadMore} className="btn-grad">
                            {isLoading ? 'Loading...' : 'Load More'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
