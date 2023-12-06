const registerValidation = (values) => {
    let errors = {};
    if (values.email && !values.email.trim() || values.email.length < 4) {
        errors.email = 'Email must be of type: email@domain.com';
    }
    if (!values.password || values.password.length < 3) {
        errors.password = 'Password must be at least 6 characters';
    }
    if (!values.email.trim() || !values.password) {
        errors.login = 'Missing email or password!';
    }
    return errors;
};

export default registerValidation