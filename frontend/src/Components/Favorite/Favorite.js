import React, { Component } from "react";
import getUser from "../../Utils/Web Controller/getUser";
import getPost from "../../Utils/Web Controller/getPost";
import PostCart from "../PostCart/PostCart";
import favCSS from "./Favorite.module.css";
export default class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favList: [],
      postId: [],
      userId: JSON.parse(localStorage.getItem("userData"))._id,
    };
  }

  getPostId = (id) => {
    getUser(id)
      .then((res) => {
        console.log(res.data.user.favorite.id);
        this.setState({
          favList: res.data.user.favorite.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getPostId(this.state.userId);
    getPost()
      .then((res) => {
        console.log(res.data.posts);
        const fevPosts = [...res.data.posts].filter(
          (el) => this.state.favList.indexOf(el._id) !== -1
        );
        console.log(fevPosts);
        this.setState({
          postId: fevPosts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const fevPosts = this.state.postId.map((el) => <PostCart data={el} key ={ el.updateTime } />);
    return <div className={favCSS.container}>{fevPosts}</div>;
  }
}
