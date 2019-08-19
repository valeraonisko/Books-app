import { PAGES } from './pages';

export const initialState = {
    bookList: {
        books: null,
        loading: false
    },
    bookCreate: {
        title: '',
        text: '',
        description: '',
        rating: null,
        posting: false
    },
    auth: {
        login: '',
        password: '',
        loggedIn: true,
        requesting: false
    },
    misc: {
        page: PAGES.BOOK_LIST
    }
};
