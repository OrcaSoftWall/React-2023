import CarCreate from '../CarCreate';
import Login from '../Login';
import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.home}>
            {/* <h1>Home</h1> */}
            <CarCreate />
        </div>

    );
}

export default Home;