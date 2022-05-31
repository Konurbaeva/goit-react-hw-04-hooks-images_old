import { useState } from 'react';
import style from './Searchbar.module.css'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


// export default function 
export default function Searchbar() {

    const [searchQuery, setSearchQuery] = useState('')

    handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            toast.error('Введите имя');
            return;
        }

        this.props.onSubmit(searchQuery);
        this.reset();
    };

    reset = () => {
        this.setState({ searchQuery: '' });
        setSearchQuery('')
    };

    handleChange = e => {
        this.setState({ searchQuery: e.currentTarget.value });
    };

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
                        value={searchQuery}
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

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};