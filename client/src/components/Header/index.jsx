import styles from './index.module.css';
import banner from '../../images/top-banner.png';
import logo from '../../images/logo-nav.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

function Header() {
    const { isAuthenticated, username, userId } = useContext(AuthContext);
    // console.log(isAuthenticated, username, userId)
    return (
        <div className={styles.header}>
            {/* <img className={styles.banner} src={banner} alt="sports cars" /> */}
            {/* <div className={styles.banner} /> */}
            <div className={styles.banner}>
                <p>Silk Cars</p>
            </div>
            <nav>
                <img className={styles.logo} src={logo} alt="logo sleek car" />
                {isAuthenticated && (
                    <>
                        <Link to={Path.Home}>Home</Link>
                        <Link to={Path.Gallery}>Gallery</Link>
                        <Link to={Path.About}>About</Link>
                        <Link to={Path.AddCar}>Add a car</Link>
                        <Link to={Path.Logout} className={styles.logout}>Logout</Link>
                        <span className={styles.span}>User: {username}</span>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <Link to={Path.Home}>Home</Link>
                        <Link to={Path.Gallery}>Gallery</Link>
                        <Link to={Path.About}>About</Link>
                        <Link to={Path.Login}>Login</Link>
                        <span className={styles.span}>You are viewing as Guest</span>

                    </>
                )}
            </nav>
        </div>

    );
}

export default Header;
