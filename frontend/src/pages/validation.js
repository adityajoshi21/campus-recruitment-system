import React from 'react'

const validation = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = "name is required";
    }
    if (!values.email) {
        errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "email is invalid";
    }
    if (!values.password) {
        errors.password = "password is required";
    } else if (values.password.length < 8) {
        errors.password = "password must be greater than 8";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "password is required";
    } else if (values.password != values.confirmPassword) {
        errors.confirmPassword = "password must be same";
    }

    return errors;
}
export default validation;
