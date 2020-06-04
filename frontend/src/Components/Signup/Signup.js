import React, { Component } from "react";
import SignupUser from "../../Utils/Web Controller/Signup";
import SignupCSS from "./Signup.module.css";
export default class Signup extends Component {
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
    SignupUser(userData);
    // loadUser(userData);
    alert("Your profile succesfully updated");
    const path = `login`;
    window.location.assign(path);
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value });
  };

  render() {
    return (
      <div className={SignupCSS.container}>
        <div className={SignupCSS.wrapper}>
          <div className={SignupCSS.headingWrapper}>
            <h2>{"Sign Up"} </h2>
          </div>
          <div className={SignupCSS.formWrapper} autocomplete="off">
            <form onSubmit={this.onFormSubmit}>
              <label htmlFor="email ">{"Email"}</label>
              <input type="text" name="email" />{" "}
              <label htmlFor="number">{"Cont. number"}</label>
              <input type="text" name="number" />{" "}
              <label htmlFor=" email ">{"Name"}</label>
              <input type="text" name="name" />{" "}
              <label htmlFor="password">{"password"}</label>
              <input type="password" name="password" />{" "}
              <label htmlFor="re.password">{"Re.password"}</label>
              <input type="password" name="re_password" />
              <button onSubmit={this.onFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
