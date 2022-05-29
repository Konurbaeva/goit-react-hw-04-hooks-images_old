import { Component } from 'react';
import style from './Searchbar.module.css'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        searchQuery: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
            toast.error('Введите имя');
            return;
        }

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
            <div className={style.Searchbar}>
                <header className="searchbar">
                    <form onSubmit={this.handleSubmit} className={style.SearchForm}>
                        <input
                            className={style.SearchForm_input}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={this.state.searchQuery}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className={style.SearchForm_button}>
                            <span className={style.SearchForm_button_label} >Search</span>
                        </button>
                    </form>
                </header>
            </div>
        );
    }
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};