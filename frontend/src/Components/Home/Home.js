import React, { Component } from "react";
import PostCart from "../PostCart/PostCart";
import HomeCSS from "./Home.module.css";
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
    const posts = this.state.postdata.map((el) => (
      <PostCart data={el} kry={el.updateTime} />
    ));

    return <div className={HomeCSS.container}>{posts}</div>;
  }
}
