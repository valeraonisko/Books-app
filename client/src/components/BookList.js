import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Card, CardTitle, CardBody, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import Rating from './Rating';

class BookList extends React.Component {

    componentDidMount() {
        this.props.loadBooks();
    }

    render() {
        if (this.props.books === null || this.props.loading) {
            return 'Loading...';
        }
        const data = {
          columns: [
            {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 150
            },
            {
        label: 'Author',
        field: 'author',
        sort: 'asc',
        width: 150
            },
            {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 150
            },
            {
        label: 'Rating',
        field: 'rating',
        sort: 'asc',
        width: 150
            }
          ],
          rows: this.props.books.map(book => {
            return {
              title: book.booktitle,
              author: book.bookauthor,
              description: book.bookdescription,
              rating: <Rating rating={book.rating}/>
            }
          })
        }
        return (
            <>
              <Navbar expand="md">
                <Nav navbar className="mr-auto">
                <NavItem>
                <NavLink active href="#" onClick={this.props.switchToNewBook}>Add new book</NavLink>
                </NavItem>
                <Nav navbar className="ml-auto">
                <NavItem>
                <NavLink active href="#" onClick={this.props.logOut}>Sign out</NavLink>
                </NavItem>
                </Nav>
              </Nav>
              </Navbar>
                  <Card>
                  <CardBody>
                    <CardTitle>Book List</CardTitle>
                  <MDBDataTable
                    striped
                    hover
                    fixed
                    data={data}
                  />
                  </CardBody>
                  </Card>


            </>
        );
    }
}

export default BookList;
