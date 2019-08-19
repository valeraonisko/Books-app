import React from 'react';
import {PAGES} from "../redux/pages";
import BookListContainer from "./BookListContainer";
import NewBookContainer from "./NewBookContainer";
import AuthContainer from "./AuthContainer";

const App = (props) => {
    return (
        props.loggedIn
            ? (props.page === PAGES.BOOK_LIST ? <BookListContainer /> : <NewBookContainer />)
            : <AuthContainer />
    );
};

export default App;
