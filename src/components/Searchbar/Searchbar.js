import { Component } from 'react';
import style from './Searchbar.module.css'


class Searchbar extends Component {
    state = {
        searchQuery: '',
    }

    handleChange = e => {
        this.setState({ searchQuery: e.target.value });
    };


    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchQuery)
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