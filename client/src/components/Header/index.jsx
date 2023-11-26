import styles from './index.module.css';
import banner from '../../images/top-banner.png';
import logo from '../../images/logo-nav.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

function Header() {
    const { isAuthenticated, username, userId } = useContext(AuthContext);
    console.log(isAuthenticated, username, userId)
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
                        <Link to='/'>Home</Link>
                        <Link to='/cars/gallery'>Gallery</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/cars/add-car'>Add a car</Link>
                        <Link to='/logout' className={styles.logout}>Logout</Link>
                        <span className={styles.span}>{username}</span>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <Link to='/'>Home</Link>
                        <Link to='/cars/gallery'>Gallery</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/login'>Login</Link>
                    </>
                )}
            </nav>
        </div>

    );
}

export default Header;
