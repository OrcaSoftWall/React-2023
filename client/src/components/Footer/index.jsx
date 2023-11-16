import styles from './index.module.css';
import logo from '../../images/logo-nav.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={logo} alt="logo sleek car" />
            <h6>All rights reserved ®2023</h6>
            {/* <nav>
                <Link to='#'>Home</Link>
                <Link to='#'>Gallery</Link>
                <Link to='#'>About</Link>
                <Link to='#'>Login</Link>
            </nav> */}
        </div>

    );
}

export default Footer;
