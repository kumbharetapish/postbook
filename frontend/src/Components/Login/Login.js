import React, { Component } from "react";
import { Link } from "react-router-dom";
// import LoginUser from "../../Utils/Login/Signup";
import LoginCSS from "./Login.module.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: e.target.email.value,
      username: e.target.name.value,
      password: e.target.password.value,
      re_password: e.target.re_password.value,
      number: e.target.number.value,
    };
    console.log(userData);
    // LoginUser(userData);
    // loadUser(userData);
    alert("Your profile succesfully updated");
    const path = `login`;
    this.props.history.push(path);
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
