import "./styles/SignIn.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "./actions";
import PropTypes from "prop-types";
import googleLogoImage from "../images/google.svg";
//import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      console.log("It will open /youtube");
      this.context.router.history.push("/youtube");
      console.log("IS inside youtube");
    }
  }

  render() {
    return (
      <div className="row social-signin-container">
        <div className="justify-content-center offset-s1 center-align">
          <img
              src={googleLogoImage}
              alt="Google Conf Logo"
              className="ui centered img-fluid mb-2 justify-content-center google"
          />
          <a href="#" className="social-signin" onClick={this.props.signIn}>
            <i className="fa fa-google social-signin-icon" />
            Sign In With Google
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { signIn })(Login);
