import React from 'react';
import {Form, FormControl, FormGroup, HelpBlock, Col, ButtonGroup, Button, Thumbnail} from 'react-bootstrap';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

class ProductForm extends React.Component {

    static getInitialProps ({ store, isServer }) {
        console.log("isServer", isServer)
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting} = this.props;

        console.log("ASD", this.props)

        return (
            <form onSubmit={handleSubmit((values) => {
                console.log(values)
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
    form: 'postForm',
})(ProductForm)
