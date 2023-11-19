import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Register() {
    return (
        <section id="login-page" className={styles.login}>
            <form id='login'>
                <div className={styles.container}>
                    <h1>Register</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' placeholder='user@domain.com' />

                    <label htmlFor='register-pass'>Password:</label>
                    <input type='password' id='register-password' name='password' />

                    <label htmlFor='re-pass'>Confirm Password:</label>
                    <input type='password' id='re-password' name='re-password' />

                    <input className={styles.submitBtn} type='submit' value='Register' />
                </div>
            </form>
        </section>

    );
}

export default Register;