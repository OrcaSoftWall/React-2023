import { Link } from 'react-router-dom';
import styles from './index.module.css';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

const loginFormKeys = {
    Email: 'email',
    Password: 'password',
};


function Login() {
    const { loginSubmitHandler } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [loginFormKeys.Email]: '',
        [loginFormKeys.Password]: '',
    });


    return (
        <section id="login-page" className={styles.login}>
            <form id='login' onSubmit={onSubmit}>
                <div className={styles.container}>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name={loginFormKeys.Email} placeholder='user@domain.com' onChange={onChange} value={values[loginFormKeys.Email]} />

                    <label htmlFor='login-pass'>Password:</label>
                    <input type='password' id='login-password' name={loginFormKeys.Password} onChange={onChange} value={values[loginFormKeys.Password]} />

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