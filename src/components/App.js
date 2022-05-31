import styles from './App.module.css';

import { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

import { getSearch } from "services/api"
// import { LoadMore } from './LoadMore';
import LoadMore from './LoadMore';


export default function App() {
    const [hits, setHits] = useState([]);
    const [searchQuery, setSearchQuery] = useState();
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [totalHits, setTotalHits] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [perPage, setPerPage] = useState(7);
    const [modalImage, setModalImage] = useState(null);

    const handleFormSubmit = queryFromSearchbar => {
        // The argument for  setSearchQuery is not an object, it's just a new value
        setSearchQuery(queryFromSearchbar);
        setHits([])
        setPage(1)
    };

    // componentDidUpdate(prevProps, prevState) {
    //     const prevPage = prevState.page;
    //     const nextPage = this.state.page;
    //     const prevsearchQuery = prevState.searchQuery;
    //     const searchQuery = this.state.searchQuery;

    //     if (prevPage !== nextPage || prevsearchQuery !== searchQuery) {
    //         loadResults();
    //     }
    // }

    // const loadResults = () => {
    //     setIsLoading(true);

    //     getSearch(searchQuery, perPage, page)
    //         .then((hits) => {
    //             this.setState(prevState => ({
    //                 hits: [...prevState.hits, ...hits], errorMsg: ''
    //             }))
    //         })
    //         .catch((error) =>
    //             this.setState({
    //                 errorMsg: 'Error while loading data. Try again later.'
    //             })
    //         )
    //         .finally(() => {
    //             this.setState({ isLoading: false });
    //         });
    // };


    useEffect(() => {
        loadResults(hits)
    }, [hits]);

    const loadResults = () => {
        setIsLoading(true);

        getSearch(searchQuery, perPage, page)
            .then((hits) => {
                setHits(prevState => ({ hits: [...prevState.hits, ...hits] }))
                setErrorMsg('')
            })
            .catch((error) =>
                setErrorMsg('Error while loading data. Try again later.')
            )
            .finally(() => setIsLoading(false));
    };


    const toggleModal = () => setShowModal(!showModal);

    const zoomImage = image => {
        toggleModal();

        setModalImage({
            modalImage: image,
        })
    };

    const loadMore = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }));
    };

    return (
        <div className={styles.App}>
            <Searchbar onSubmit={handleFormSubmit} />
            {hits && (
                <ImageGallery images={hits} openModal={zoomImage} />
            )}

            {showModal && (
                <Modal
                    largeImageURL={modalImage}
                    onClose={toggleModal}
                    description={searchQuery}
                />
            )}

            <LoadMore isLoading={isLoading} loadMore={loadMore} />
            {isLoading && <Loader />}
        </div>
    );
}

