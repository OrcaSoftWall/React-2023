import CarCreate from '../CarCreate';
import Gallery from '../Gallery';
import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <CarCreate />
        </div>

    );
}

export default Home;