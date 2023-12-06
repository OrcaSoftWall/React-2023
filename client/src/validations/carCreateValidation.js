const createCarValidation = (values) => {
    let errors = {};

    Object.keys(values).map(value => {
        if (!values[value].trim() || values[value].length < 1) {
            errors[value] = `${value} cannot be empty!`;
        }
    })
    
    return errors;
};

export default createCarValidation
