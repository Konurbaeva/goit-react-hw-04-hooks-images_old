import styles from './LoadMore.module.css';

export function LoadMore({ isLoading, loadMore }) {
    return (<div>
        <button onClick={loadMore} className={styles.Button}>
            {isLoading ? 'Loading...' : 'Load More'}
        </button>
    </div>);
}