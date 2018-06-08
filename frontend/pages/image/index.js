import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { uploadFile } from '../../actions/imageActions'
import {fetchPosts} from "../../actions/postsActions";

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
   input: { value: omitValue, onChange, onBlur, ...inputProps },
   meta: omitMeta,
   ...props
}) => {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};


class ImageForm extends React.Component {

    static getInitialProps ({ store, isServer }) {
        console.log("isServer", isServer)
    }

    render() {
        const {dispatch, handleSubmit, pristine, reset, submitting} = this.props;

        // let reader = new FileReader();

        console.log("ASD", this.props)

        return (
            <form onSubmit={handleSubmit((values) => {
                console.log(values)
                dispatch(uploadFile(values))
            })}>
                <Field name="image" component={FileInput} type="file"/>
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
    form: 'imageForm',
})(ImageForm)
