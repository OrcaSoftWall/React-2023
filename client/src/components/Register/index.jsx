import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import registerValidation from '../../validations/registerValidation';

const registerFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    ConfirmPassword: 'rePassword',
}

function Register() {
    const { registerSubmitHandler } = useContext(AuthContext)
    const {values, onChange, onSubmit, errors } = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Username]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.ConfirmPassword]: '',
    }, registerValidation)


    return (
        <section id="register-page" className={styles.register}>
            <form id='register' noValidate onSubmit={onSubmit}>
                <div className={styles.container}>
                    <h1>Register</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' placeholder='user@domain.com' onChange={onChange} value={values[registerFormKeys.Email]} autoFocus />
                    {errors.email && <p className={styles.error} >{errors.email}</p>}

                    <label htmlFor='username'>Username (optional):</label>
                    <input type='text' id='username' name='username' placeholder='' onChange={onChange} value={values[registerFormKeys.Username]} />

                    <label htmlFor='register-pass'>Password:</label>
                    <input type='password' id='register-password' name='password' onChange={onChange} value={values[registerFormKeys.Password]} />
                    {errors.password && <p className={styles.error} >{errors.password}</p>}

                    <label htmlFor='re-pass'>Confirm Password:</label>
                    <input type='password' id='re-password' name='rePassword' onChange={onChange} value={values[registerFormKeys.ConfirmPassword]} />
                    {errors.rePassword && <p className={styles.error} >{errors.rePassword}</p>}

                    <input className={styles.submitBtn} type='submit' value='Register' />
                    <p className={styles.field}>
                        <span>Have an account? <Link to='/login' className={styles.link}>→ LOGIN</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Register;