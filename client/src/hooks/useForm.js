import { useState, useEffect } from "react";

export default function useForm(submitHandler, initialValues, registerValidation) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
          setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const validationErrors = registerValidation ? registerValidation(values) : {};
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