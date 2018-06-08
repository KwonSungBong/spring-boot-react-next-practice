import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class SubmitForm extends React.Component {

    static getInitialProps ({ store, isServer }) {
        console.log("isServer", isServer)
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting} = this.props;

        console.log("ASD", this.props)

        return (
            <form onSubmit={handleSubmit((values) => {
                console.log(values)

                return sleep(1000).then(() => {
                    // simulate server latency
                    if (!['john', 'paul', 'george', 'ringo'].includes(values.subject)) {
                        throw new SubmissionError({
                            subject: 'subject does not exist',
                            _error: 'save failed!'
                        })
                    } else if (values.content !== 'redux-form') {
                        throw new SubmissionError({
                            content: 'Wrong content',
                            _error: 'save failed!'
                        })
                    } else {
                        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
                    }
                })
            })}>
                <Field
                    name="subject"
                    type="text"
                    component={renderField}
                    label="Subject"
                />
                <Field
                    name="content"
                    type="text"
                    component={renderField}
                    label="Content"
                />
                {error && <strong>{error}</strong>}
                <div>
                    <button type="submit" disabled={submitting}>
                        save
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

// ProductForm = reduxForm({
//     form: 'postForm',
//     fields: ['subject', 'content'],
// })(ProductForm);
//
// ProductForm = connect(
//     state => ({
//     }),
//     {},
// )(ProductForm);
//
// export default ProductForm;

export default reduxForm({
    form: 'submitForm',
})(SubmitForm)
