import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import asyncValidate from './asyncValidate'

const renderField = ({
     input,
     label,
     type,
     meta: { asyncValidating, touched, error }
 }) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

class AsyncForm extends React.Component {

    static getInitialProps ({ store, isServer }) {
        console.log("isServer", isServer)
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

        console.log("ASD", this.props)

        return (
            <form onSubmit={handleSubmit((values) => {
                console.log("values", values)
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

export default reduxForm({
    form: 'asyncForm', // a unique identifier for this form
    validate,
    asyncValidate,
    asyncBlurFields: ['subject']
})(AsyncForm)