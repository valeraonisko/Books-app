import {PAGES} from "./pages";

const API = '/api';

export const ACTIONS = {
    BOOK_LIST: {
        FETCH_START: 'fetch_books_start',
        FETCH_END: 'fetch_books_end',
        SHOW_BOOKS: 'show_books'
    },
    BOOK_CREATE: {
        UPDATE_TITLE: 'update_title',
        UPDATE_AUTHOR: 'update_author',
        UPDATE_DESCRIPTION: 'update_description',
        UPDATE_RATING: 'update_rating',
        POST_START: 'post_book_start',
        POST_END: 'post_book_end'
    },
    AUTH: {
        UPDATE_LOGIN: 'update_login',
        UPDATE_PASSWORD: 'update_password',
        LOG_IN: 'log_in',
        LOG_OUT: 'log_out',
        REQUEST_START: 'start_auth_request'
    },
    MISC: {
        SWITCH_PAGE: 'switch_page'
    }
};

function fetchBooksStart() {
    return {
        type: ACTIONS.BOOK_LIST.FETCH_START
    };
}

function fetchBooksEnd() {
    return {
        type: ACTIONS.BOOK_LIST.FETCH_END
    };
}

function showBooks(books) {
    return {
        type: ACTIONS.BOOK_LIST.SHOW_BOOKS,
        books
    };
}

export function loadBooks() {
    return dispatch => {
        dispatch(fetchBooksStart());
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${API}/books`);
        xhr.withCredentials = true;
        xhr.addEventListener('load', () => {
            dispatch(fetchBooksEnd());
            if (xhr.status === 401) {
                dispatch(logOut());
            } else {
                dispatch(showBooks(JSON.parse(xhr.response)));
            }
        });
        xhr.send();
    };
}

export function updateBookTitle(title) {
    return {
        type: ACTIONS.BOOK_CREATE.UPDATE_TITLE,
        title
    };
}

export function updateBookAuthor(author) {
    return {
        type: ACTIONS.BOOK_CREATE.UPDATE_AUTHOR,
        author
    };
}

export function updateBookDescription(description) {
    return {
        type: ACTIONS.BOOK_CREATE.UPDATE_DESCRIPTION,
        description
    };
}

export function updateBookRating(rating) {
    return {
        type: ACTIONS.BOOK_CREATE.UPDATE_RATING,
        rating
    };
}

function postStart() {
    return {
        type: ACTIONS.BOOK_CREATE.POST_START
    };
}

function postEnd() {
    return {
        type: ACTIONS.BOOK_CREATE.POST_END
    };
}

export function postBook() {
    return (dispatch, getState) => {
        const { bookCreate: { title, author, description, rating } } = getState();
        dispatch(postStart());
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${API}/books`);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener('load', () => {
            dispatch(postEnd());
            if (xhr.status === 401) {
                dispatch(logOut());
            } else {
                dispatch(switchPage(PAGES.BOOK_LIST));
            }
        });
        xhr.send(JSON.stringify({
            title,
            author,
            description,
            rating
        }));
    };
}

export function updateLogin(login) {
    return {
        type: ACTIONS.AUTH.UPDATE_LOGIN,
        login
    };
}

export function updatePassword(password) {
    return {
        type: ACTIONS.AUTH.UPDATE_PASSWORD,
        password
    };
}

function logIn() {
    return {
        type: ACTIONS.AUTH.LOG_IN
    };
}

function logOut() {
    return {
        type: ACTIONS.AUTH.LOG_OUT
    };
}

function authRequest() {
    return {
        type: ACTIONS.AUTH.REQUEST_START
    };
}

export function logInRequest() {
    return (dispatch, getState) => {
        const { auth: { login, password } } = getState();
        dispatch(authRequest());
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${API}/login`);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener('load', () => {
            dispatch(xhr.status === 401 ? logOut() : logIn());
        });
        xhr.send(JSON.stringify({
            login,
            password
        }));
    };
}

export function logOutRequest() {
    return dispatch => {
        dispatch(authRequest());
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${API}/logout`);
        xhr.withCredentials = true;
        xhr.addEventListener('load', () => {
            dispatch(logOut());
        });
        xhr.send();
    };
}

export function switchPage(page) {
    return {
        type: ACTIONS.MISC.SWITCH_PAGE,
        page
    };
}
