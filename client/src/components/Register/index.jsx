import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

const registerFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 're-password',
}

function Register() {
    const { registerSubmitHandler } = useContext(AuthContext)
    const {values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.ConfirmPassword]: '',
    })


    return (
        <section id="register-page" className={styles.register}>
            <form id='register' onSubmit={onSubmit}>
                <div className={styles.container}>
                    <h1>Register</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' placeholder='user@domain.com' onChange={onChange} value={values[registerFormKeys.Email]} />

                    <label htmlFor='register-pass'>Password:</label>
                    <input type='password' id='register-password' name='password' onChange={onChange} value={values[registerFormKeys.Password]} />

                    <label htmlFor='re-pass'>Confirm Password:</label>
                    <input type='password' id='re-password' name='re-password' onChange={onChange} value={values[registerFormKeys.ConfirmPassword]} />

                    <input className={styles.submitBtn} type='submit' value='Register' />
                    <p className={styles.field}>
                        <span>Have an account? <Link to='/login' className={styles.link}>LOGIN</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );
}

export default Register;