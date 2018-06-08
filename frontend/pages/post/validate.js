const validate = values => {
    const errors = {}
    if (!values.subject) {
        errors.subject = 'Required'
    }
    if (!values.content) {
        errors.content = 'Required'
    }
    return errors
}

export default validate
