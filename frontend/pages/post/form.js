import React from 'react';
import {Form, FormControl, FormGroup, HelpBlock, Col, ButtonGroup, Button, Thumbnail} from 'react-bootstrap';
import { connect } from 'react-redux'
import {reduxForm} from 'redux-form';

class ProductForm extends React.Component {

    render() {
        const {fields: {subject, content}, values, handleSubmit, submitting, invalid} = this.props;

        return (
            <Form horizontal onSubmit={handleSubmit}>
                <FormGroup controlId="subject">
                    <Col sm={2}>
                        제목
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="제목" {...subject} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="content">
                    <Col sm={2}>
                        내용
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="내용" {...content} />
                    </Col>
                </FormGroup>

                <ButtonGroup className="pull-right">
                    <Button type="submit" disabled={submitting || invalid}
                            bsStyle="primary" onClick={handleSubmit(() => {
                        console.log('save', values)
                    })}>
                        저장
                    </Button>
                    <Button>
                        취소
                    </Button>
                </ButtonGroup>
            </Form>
        )
    }
}

ProductForm = reduxForm({
    form: 'postForm',
    fields: ['subject', 'content'],
})(ProductForm);

ProductForm = connect(
    state => ({
    }),
    {},
)(ProductForm);

export default ProductForm;

// export default reduxForm({
//     form: 'postForm',
//     fields: ['subject', 'content'],
// })(ProductForm)
