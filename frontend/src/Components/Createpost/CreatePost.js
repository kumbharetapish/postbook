import React, { Component } from "react";
import CreatePostCSS from "./CreatePost.module.css";
import postPosts from "../../Utils/Web Controller/postPost";
export default class CreatePost extends Component {
  constructor(props) {
    super(props);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const createdPost = {
      message: e.target.message.value,
      updateTime: new Date().toDateString(),
    };
    console.log(createdPost);
    postPosts(createdPost);
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value });
  };

  render() {
    return (
      <div className={CreatePostCSS.container}>
        <div className={CreatePostCSS.wrapper}>
          <div className={CreatePostCSS.headingWrapper}>
            <h2>{"Create Post"} </h2>
          </div>
          <div className={CreatePostCSS.formWrapper} autocomplete="off">
            <form onSubmit={this.onFormSubmit}>
              <textarea name="message" />
              <button onSubmit={this.onFormSubmit}> Post </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
