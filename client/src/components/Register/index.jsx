import { useContext } from 'react';
import styles from './index.module.css';
import AuthContext from '../../contexts/authContext';

const registerFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 're-password',
}

function Register() {
    const { registerSubmitHandler } = useContext(AuthContext)
    const { } = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.ConfirmPassword]: '',
    })


    return (
        <section id="login-page" className={styles.login}>
            <form id='login'>
                <div className={styles.container}>
                    <h1>Register</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' placeholder='user@domain.com' value={values[registerFormKeys.Email]} />

                    <label htmlFor='register-pass'>Password:</label>
                    <input type='password' id='register-password' name='password' value={values[registerFormKeys.Password]} />

                    <label htmlFor='re-pass'>Confirm Password:</label>
                    <input type='password' id='re-password' name='re-password' value={values[registerFormKeys.ConfirmPassword]} />

                    <input className={styles.submitBtn} type='submit' value='Register' />
                </div>
            </form>
        </section>

    );
}

export default Register;