import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorite from "./Components/Favorite/Favorite";
import CreatePost from "./Components/Createpost/CreatePost";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Navbar from "./Components/Navbar/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route
              path="/login"
              render={() => (this.state.status ? <Login /> : <Signup />)}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/create_post" component={CreatePost} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
