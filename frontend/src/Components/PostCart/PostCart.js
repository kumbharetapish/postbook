import React, { Component } from "react";
import cartCss from "./PostCart.module.css";
import updatePost from "../../Utils/Web Controller/updatePost";
import getUser from "../../Utils/Web Controller/getUser";
import updateUser from "../../Utils/Web Controller/updateUsers";
export default class PostCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: true,
      likeCount: this.props.data.like,
      dislike: true,
      dislikeCount: this.props.data.like,
      bookmarkPost: [],
      userId: JSON.parse(localStorage.getItem("userData"))._id,
    };
  }

  postLike = (data) => {
    console.log(data._id);
    const incLike = this.state.like ? parseInt(data.like) + 1 : data.like;
    this.setState({
      like: false,
      likeCount: incLike,
    });
    console.log(incLike);
    updatePost(data._id, { ...data, like: incLike });
  };

  postDisLike = (data) => {
    console.log(data._id);
    const incDislike = this.state.dislike
      ? parseInt(data.dislike) + 1
      : data.like;
    this.setState({
      dislike: false,
      dislikeCount: incDislike,
    });
    updatePost(data._id, { ...data, dislike: incDislike });
  };

  getBookmarkList = (id) => {
    getUser(id)
      .then((res) => {
        console.log(res.data.user.favorite.id);
        this.setState({
          bookmarkPost: res.data.user.favorite.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addBookmark = (data) => {
    console.log(data);
    console.log(this.state.userId, "userId");
    this.getBookmarkList(this.state.userId);

    const bookmarkList = [...this.state.bookmarkPost, data._id];
    // this.state.bookmarkPost.indexOf(data._id) === -1
    //   ? this.state.bookmarkPost.push(data._id)
    //   : this.state.bookmarkPost;

    this.setState({
      bookmarkPost: bookmarkList,
    });
    console.log(bookmarkList);
    updateUser(this.state.userId, {
      favorite: {
        id: bookmarkList,
      },
    });
    // console.log(this.props.data);
  };

  render() {
    return (
      <div className={cartCss.cartWrapper} key={this.props.data._id}>
        <div className={cartCss.profileWrapper}>
          <img
            src="#"
            alt="user_profile"
            srcset="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
          />
          <div className={cartCss.imgWrapper}>
            <p> {this.props.data.usersData.email} </p>
            <samp> {`at ${this.props.data.updateTime}`} </samp>
          </div>
        </div>

        <div className={cartCss.messageWrapper}>
          <p>{this.props.data.message}</p>
        </div>

        <div className={cartCss.actionWrapper}>
          <div className={cartCss.actionBtnWrapper}>
            <div
              className={cartCss.likeWrapper}
              onClick={() => this.postLike(this.props.data)}
            >
              <i className={"fas fa-thumbs-up"} />
              <samp> {this.state.likeCount}</samp>
            </div>
            <div
              className={cartCss.dislikeWrapper}
              onClick={() => this.postDisLike(this.props.data)}
            >
              <i className={"fas fa-thumbs-down"} />
              <samp>{this.state.dislikeCount}</samp>
            </div>
          </div>

          <div className={cartCss.actionBtnWrapper}>
            <div
              className={cartCss.bookmarkWrapper}
              onClick={() =>
                this.addBookmark(
                  this.props.data,
                  this.props.data.usersData.email
                )
              }
            >
              <i className={"fas fa-bookmark"}> </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
