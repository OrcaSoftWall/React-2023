import styles from './index.module.css';
import banner from '../../images/top-banner.png';
import logo from '../../images/logo-nav.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            {/* <img className={styles.banner} src={banner} alt="sports cars" /> */}
            {/* <div className={styles.banner} /> */}
            <div className={styles.banner}>
                <p>Silk Cars</p>
            </div>
            <nav>
                <img className={styles.logo} src={logo} alt="logo sleek car" />
                <Link to='/'>Home</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
                {/* <Link to='/register'>Register</Link> */}
                <Link to='/add-car'>Add a car</Link>
            </nav>
        </div>

    );
}

export default Header;
