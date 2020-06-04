import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as actionCreators from "../../Redux/Actions/Actions";

import LoginCSS from "./Login.module.css";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
    };
  }

  onFormSubmit = (e) => {
    console.log(this.props);

    e.preventDefault();
    const loginUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    actionCreators.loadUser(loginUser);
    this.registerUser(loginUser);
    window.location.assign("");
  };

  registerUser = (user) => {
    return new Promise((resolve, reject) => {
      Axios.get("http://localhost:8000/api/diatoz/v0/users?email=" + user.email)
        .then((data) => {
          console.log(data.results);
          if (data.results === 0) {
            alert("invalid account");
          } else {
            resolve(data);
            console.log(data.data.data.users[0]);
            if (data.data.data.users[0].password === user.password) {
              alert("Login Successfull");
              
              console.log(this.props.user);
              localStorage.setItem(
                "userData",
                JSON.stringify({
                  ...data.data.data.users[0],
                  status: !this.state.loginStatus,
                })
              );
              window.location.assign("/")
            } else {
              alert("You enter wrong password");
            }
          }
        })
        .catch((err) => {
          console.log("Error occured", err);
          reject(err);
        });
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value });
  };

  render() {
    return (
      <div className={LoginCSS.container}>
        <div className={LoginCSS.wrapper}>
          <div className={LoginCSS.headingWrapper}>
            <h2>{"log in"} </h2>
          </div>
          <div className={LoginCSS.formWrapper} autocomplete="off">
            <form onSubmit={this.onFormSubmit}>
              <label htmlFor="email ">{"Email"}</label>
              <input type="text" name="email" />{" "}
              <label htmlFor="password">{"password"}</label>
              <input type="password" name="password" />{" "}
              <button onSubmit={this.onFormSubmit}>Submit</button>
            </form>
          </div>

          <div className={LoginCSS.headingWrapper}>
            <Link to="/signup"> {"Create new  Account."}</Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, actionCreators)(Login);
