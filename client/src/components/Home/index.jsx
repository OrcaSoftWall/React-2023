import styles from './index.module.css';
import video from '../../video/McLF1-720.mp4'
import Gallery from '../Gallery';
import GalleryLatest from '../GalleryLatest';



function Home() {
     
    return (
        <div className={styles.home}>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
                {/* <source src="https://www.mercedes-amg.com/en/world-of-amg/stories/_jcr_content/stage/media/slides/slide_copy_copy_copy/media1/video.video.20210823161729.mp4" type="video/mp4" /> */}
            </video>
            {/* <h1>RECENT CARS</h1> */}
            <GalleryLatest />
        </div>

    );
}

export default Home;
