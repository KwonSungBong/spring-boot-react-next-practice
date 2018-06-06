import { Col, Row } from 'react-bootstrap'

import Input from '../handlers/Input'

const UserForm = () => {
  return (
    <div>
      <Row>
        <Col lg={8} lgOffset={4}>
          <Input controlId='form-name' controlLabel='Name' title='user' name='name' />
        </Col>
        <Col lg={8} lgOffset={4}>
          <Input controlId='form-last-name' controlLabel='Last name' title='user' name='lastName' />
        </Col>
        <Col lg={8} lgOffset={4}>
          <Input controlId='form-email' controlLabel='Email' type='email' title='user' name='email' />
        </Col>
        <Col lg={8} lgOffset={4}>
          <Input controlId='form-password' controlLabel='Password' type='password' title='user' name='password' />
        </Col>
      </Row>
    </div>
  )
}

export default UserForm
