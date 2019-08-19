import React from 'react';
import { Row, Col, Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const NewBook = (props) => {
    return (
        <>
              <Navbar expand="md">
                <Nav navbar className="mr-auto">
                <NavItem>
                <NavLink active href="#" onClick={props.switchToBookList}>Switch to list of books</NavLink>
                </NavItem>
              </Nav>
              </Navbar>
              <Row className="mt-4">
                <Col sm="3"/>
                <Col sm="6">
                <Card>
                <CardBody>
                  <CardTitle>Add new article</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="title">New book title</Label>
                <Input type="text"
                  id="title" value={props.title}
                  onChange={event => props.updateTitle(event.target.value)}
                  placeholder="Book title" />
                </FormGroup>
                <FormGroup>
                  <Label for="author">New book author</Label>
                <Input type="text"
                  id="author" value={props.author}
                  onChange={event => props.updateAuthor(event.target.value)}
                  placeholder="Book author" />
                </FormGroup>
                <FormGroup>
                  <Label for="description">New book description</Label>
                <Input type="textarea"
                  id="description" value={props.description}
                  onChange={event => props.updateDescription(event.target.value)}
                  placeholder="Book desctiption" />
                </FormGroup>
                <FormGroup>
                  <Label for="rating">New book rating</Label>
                <Input type="text"
                  id="rating"
                  value={props.rating}
                  onChange={event => props.updateRating(event.target.value)}
                  placeholder="Rating: please, enter number from 0 to 10" />
                </FormGroup>
                <Button onClick={props.postBook}>Submit</Button>
              </Form>
            </CardBody>
            </Card>
            </Col>
            </Row>
        </>
    );
};

export default NewBook;
