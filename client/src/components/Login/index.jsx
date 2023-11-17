import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Login() {
    return (
        <section id="login-page" className={styles.login}>
            <form id='login'>
                <div className={styles.container}>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' placeholder='user@domain.com' />

                    <label htmlFor='login-pass'>Password:</label>
                    <input type='password' id='login-password' name='password' />

                    <input className={styles.submitBtn} type='submit' value='Login' />
                    <p className={styles.field}>
                        <span>Not registered yet? <Link to='/register'>Click here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );
}

export default Login;