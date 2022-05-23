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
        isLoading: false,
        showModal: true,
        galleryPage: 1,
    };

    handleChange = e => {
        this.setState({ query: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.onSubmit(this.state.query);

        // reset query?
        //  this.setState({ query: '' });
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        try {
            // getSearch('Nature')
            //     .then(response => response.json())
            //     .then(hits => this.setState({ hits: hits }))


            //  const hits = getSearch(this.state.query)
            // .then(response => response.json())
            // .then(hits => this.setState({ hits }))
            // .error(error => console.error(error))

            const resp = getSearch(this.state.query)
            const hits = resp.json()
            this.setState({ hits })

            console.log('GET SEARCH: ' + hits)
            //  this.setState({ hits });

        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { query, showModal, hits } = this.state;
        console.log('HITS in APP: ###############' + hits)

        return (
            <div>
                {showModal && <Modal />}
                <Searchbar
                    onSubmit={this.handleSubmit}
                    value={query}
                    onChange={this.handleChange}

                // onChange={(e) => this.setState(e.target.value)}
                //  onChange={(e) => this.setState({ query: e.currentTarget.value })}
                // onChange={(e) => this.setState(e.currentTarget.value)}

                />
                <ImageGallery hits={hits} />
            </div>
        );
    }
}
