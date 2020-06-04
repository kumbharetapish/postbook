import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navShow: false,
    };
  }

  handelSideNav = () => {
    this.setState({
      navShow: !this.state.navShow,
    });
  };

  render() {
    const sideNav = this.state.navShow ? (
      <div className={NavbarCSS.sideNavWrapper} onClick={this.handelSideNav}>
        <div className={NavbarCSS.navLine}>
          <Link to={"/"}> {"Home"} </Link>
          <Link to={"/favorite"}> {"Favorite"} </Link>
          <Link to="/create_post"> {"Create Post"}</Link>
        </div>
      </div>
    ) : null;
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
            {this.props.userData.status ? (
              <span to="/login">
                {" "}
                {`Login,${this.props.userData.username}`}
              </span>
            ) : (
              <Link to="/signup"> {"Signup"}</Link>
            )}
          </div>
          <div onClick={this.handelSideNav} className={NavbarCSS.bar}>
            <i className={"fa fa-bars"}> </i>
          </div>
        </div>
        {sideNav}
      </div>
    );
  }
}
