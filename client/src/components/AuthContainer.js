import {connect} from "react-redux";
import {logInRequest, updateLogin, updatePassword} from "../redux/actions";
import Auth from "./Auth";

function mapStateToProps(state) {
    return {
        login: state.auth.login,
        password: state.auth.password
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateLogin: login => dispatch(updateLogin(login)),
        updatePassword: password => dispatch(updatePassword(password)),
        logIn: () => dispatch(logInRequest())
    };
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);
export default AuthContainer;