import {ACTIONS} from "./actions";
import {combineReducers} from "redux";
import {initialState} from "./initialState";

export const reducer = combineReducers({
    bookList,
    bookCreate,
    auth,
    misc
});

function bookList(state = initialState.bookList, action) {
    switch (action.type) {
        case ACTIONS.BOOK_LIST.FETCH_START:
            return {
                ...state,
                loading: true
            };
        case ACTIONS.BOOK_LIST.FETCH_END:
            return {
                ...state,
                loading: false
            };
        case ACTIONS.BOOK_LIST.SHOW_BOOKS:
            return {
                ...state,
                books: action.books
            };
        default:
            return state;
    }
}

function bookCreate(state = initialState.bookCreate, action) {
    switch (action.type) {
        case ACTIONS.BOOK_CREATE.UPDATE_TITLE:
            return {
                ...state,
                title: action.title
            };
        case ACTIONS.BOOK_CREATE.UPDATE_AUTHOR:
            return {
                ...state,
                author: action.author
            };
        case ACTIONS.BOOK_CREATE.UPDATE_DESCRIPTION:
            return {
                ...state,
                description: action.description
            };
        case ACTIONS.BOOK_CREATE.UPDATE_RATING:
            return {
                ...state,
                rating: action.rating
            };
        case ACTIONS.BOOK_CREATE.POST_START:
            return {
                ...state,
                posting: true
            };
        case ACTIONS.BOOK_CREATE.POST_END:
            return {
                ...state,
                posting: false
            };
        default:
            return state;
    }
}

function auth(state = initialState.auth, action) {
    switch (action.type) {
        case ACTIONS.AUTH.LOG_IN:
            return {
                ...state,
                loggedIn: true,
                requesting: false
            };
        case ACTIONS.AUTH.LOG_OUT:
            return {
                ...state,
                loggedIn: false,
                requesting: false
            };
        case ACTIONS.AUTH.REQUEST_START:
            return {
                ...state,
                requesting: true
            };
        case ACTIONS.AUTH.UPDATE_LOGIN:
            return {
                ...state,
                login: action.login
            };
        case ACTIONS.AUTH.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            };
        default:
            return state;
    }
}

function misc(state = initialState.misc, action) {
    switch (action.type) {
        case ACTIONS.MISC.SWITCH_PAGE:
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
}
