import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className={NavbarCSS.container}>
        <div className={NavbarCSS.wrapper}>
          <div className={NavbarCSS.LogoWrapper}>
            <h2>{"Logo"}</h2>
          </div>
          <div className={NavbarCSS.navWrapper}>
            <Link to={"/"}> {"Home"} </Link>
            <Link to={"/favorite"}> {"Favorite"} </Link>
            <Link to="/create_post"> {"Create Post"}</Link>
          </div>
          <div className={NavbarCSS.userWrapper}>
            <Link to="/signup"> {"Signup"}</Link>
            <Link to="/login"> {"Login, John "}</Link>
          </div>
        </div>
      </div>
    );
  }
}
