import {connect} from "react-redux";
import {postBook, switchPage,
  updateBookAuthor, updateBookTitle,
  updateBookDescription, updateBookRating } from "../redux/actions";
import NewBook from "./NewBook";
import {PAGES} from "../redux/pages";

function mapStateToProps(state) {
    return {
        title: state.bookCreate.title,
        author: state.bookCreate.author,
        description: state.bookCreate.description,
        rating: state.bookCreate.rating,
        posting: state.bookCreate.posting
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTitle: title => dispatch(updateBookTitle(title)),
        updateAuthor: author => dispatch(updateBookAuthor(author)),
        updateDescription: description => dispatch(updateBookDescription(description)),
        updateRating: rating => dispatch(updateBookRating(rating)),
        postBook: () => dispatch(postBook()),
        switchToBookList: () => dispatch(switchPage(PAGES.BOOK_LIST))
    };
}

const NewBookContainer = connect(mapStateToProps, mapDispatchToProps)(NewBook);

export default NewBookContainer;
