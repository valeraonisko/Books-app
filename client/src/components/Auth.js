import React from 'react';
import { Row, Col, Card, CardTitle, CardBody,
  Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Auth = (props) => {
    return (
      <Row className="mt-4">
        <Col sm="3"/>
        <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle>Login form</CardTitle>
      <Form>
        <FormGroup>
          <Label for="login">Login</Label>
        <Input type="text"
          id="login" value={props.login}
          onChange={(event) => props.updateLogin(event.target.value)}
          placeholder="Login: please, enter 'foo'" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
        <Input type="password"
          id="password"
          value={props.password}
          onChange={(event) => props.updatePassword(event.target.value)}
          placeholder="Password: please, enter 'bar'" />
        </FormGroup>
        <Button onClick={props.logIn}>Submit</Button>
      </Form>
    </CardBody>
    </Card>
    </Col>
    </Row>
    );
};

export default Auth;
