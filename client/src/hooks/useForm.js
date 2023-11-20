import { useState } from "react"

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        // check on type of value, to incorporate other elements as well

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }



    return {
        values,
        onChange,
    }
}