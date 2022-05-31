import { useState } from 'react';
import style from './Searchbar.module.css'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


export default function Searchbar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            toast.error('Введите имя');
            return;
        }

        console.log('searchQuery: ', searchQuery);
        onSubmit(searchQuery);
        reset();
    };

    const reset = () => {
        setSearchQuery('')
    };

    const handleChange = e => {
        //  setSearchQuery({ searchQuery: e.currentTarget.value })
        setSearchQuery(e.currentTarget.value)
    };

    return (
        <div className={style.Searchbar}>
            <header className="searchbar">
                <form onSubmit={handleSubmit} className={style.SearchForm}>
                    <input
                        className={style.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchQuery}
                        onChange={handleChange}
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