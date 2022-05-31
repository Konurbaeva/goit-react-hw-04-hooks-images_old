import styles from './LoadMore.module.css';
import PropTypes from 'prop-types';

export default function LoadMore({ isLoading, loadMore }) {
    return (<div>
        <button onClick={loadMore} className={styles.Button}>
            {isLoading ? 'Loading...' : 'Load More'}
        </button>
    </div>);
}

LoadMore.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
};