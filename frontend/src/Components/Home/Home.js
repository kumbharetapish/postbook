import React, { Component } from "react";
import PostCart from "../PostCart/PostCart";
import Axios from "axios";
import getPost from "../../Utils/Web Controller/getPost";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postdata: [],
    };
  }
  componentDidMount() {
    getPost().then((res) => {
      this.setState({
        postdata: res.data.posts,
      });
    });
  }

  render() {
    const posts = this.state.postdata.map((el) => <PostCart data={el} />);

    return <div>{posts}</div>;
  }
}
