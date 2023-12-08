import styles from './index.module.css';
import logo from '../../images/logo-nav.png';

function Footer() {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={logo} alt="logo sleek car" />
            <h6>All rights reserved ®2023</h6>
        </div>
    );
}

export default Footer;
