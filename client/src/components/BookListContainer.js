import {connect} from "react-redux";
import {loadBooks, logOutRequest, switchPage} from "../redux/actions";
import {PAGES} from "../redux/pages";
import BookList from "./BookList";

function mapStateToProps(state) {
    return {
        books: state.bookList.books,
        loading: state.bookList.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadBooks: () => dispatch(loadBooks()),
        switchToNewBook: () => dispatch(switchPage(PAGES.BOOK_CREATE)),
        logOut: () => dispatch(logOutRequest())
    };
}

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
