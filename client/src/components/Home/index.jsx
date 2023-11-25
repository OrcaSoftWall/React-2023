import styles from './index.module.css';
import video from '../../video/McLF1-720.mp4'
import Gallery from '../Gallery';



function Home() {
     
    return (
        <div className={styles.home}>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            {/* <h1>RECENT CARS</h1> */}
            <Gallery />
        </div>

    );
}

export default Home;
