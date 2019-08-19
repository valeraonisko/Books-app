import {connect} from "react-redux";
import App from "./App";

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn,
        page: state.misc.page
    };
}

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
