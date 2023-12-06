import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    console.log("initialValues:", initialValues);
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        // check on type of value, to incorporate other elements as well

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const validate = (values) => {
        let errors = {};
        if (!values.email.trim() || values.email.length < 4) {
            errors.email = 'Email must be of type: email@domain.com';
        }
        if (!values.password || values.password.length < 3) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!values.email.trim() || !values.password) {
            errors.login = 'Missing email or password!';
        }
        // ...additional validations...
        return errors;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        console.log('values to submit with useForm: ', values);
        console.log('validation errors:   ', validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            submitHandler(values)
        }

    }


    return {
        values,
        onChange,
        onSubmit,
        errors
    }
}