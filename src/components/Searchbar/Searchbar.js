import style from './Searchbar.module.css'

function Searchbar({ onSubmit }) {
    return (
        <div className={style.container}>
            <header className="searchbar">
                <form className="form" onSubmit={onSubmit}>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />

                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                </form>
            </header>
        </div>
    );
}



export default Searchbar;