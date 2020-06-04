import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Favorite from "./Components/Favorite/Favorite";
import CreatePost from "./Components/Createpost/CreatePost";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Navbar from "./Components/Navbar/Navbar";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:
        localStorage.getItem("userData") === null
          ? localStorage.setItem("userData", JSON.stringify({ status: false }))
          : JSON.parse(localStorage.getItem("userData")),
    };

    console.log(this.state.data);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar userData={this.state.data} />

          <Switch>
            <Route
              path="/login"
              render={() =>
                !this.state.data.status ? <Login /> : <Redirect to={"signup"} />
              }
            />

            <Route
              path="/favorite"
              render={() =>
                this.state.data.status ? (
                  <Favorite />
                ) : (
                  <Redirect to={"signup"} />
                )
              }
            />
            <Route
              path="/create_post"
              render={() =>
                this.state.data.status ? (
                  <CreatePost />
                ) : (
                  <Redirect to={"signup"} />
                )
              }
            />
            <Route
              exact
              path="/"
              render={() =>
                !this.state.data.status ? <Redirect to={"signup"} /> : <Home />
              }
            />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(App);
