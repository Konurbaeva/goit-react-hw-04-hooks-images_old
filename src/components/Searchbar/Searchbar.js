import { Component } from 'react';
import style from './Searchbar.module.css'


class Searchbar extends Component {
    state = {
        searchQuery: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
        this.reset();
    };

    reset = () => {
        this.setState({ searchQuery: '' });
    };

    handleChange = e => {
        this.setState({ searchQuery: e.currentTarget.value });
    };

    render() {
        return (
            <div className={style.container}>
                <header className="searchbar">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input
                            className="input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={this.state.searchQuery}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="button">
                            <span className="button-label">Search</span>
                        </button>
                    </form>
                </header>
            </div>
        );
    }
}

export default Searchbar;