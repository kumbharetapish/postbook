import React, { Component } from "react";
import cartCss from "./PostCart.module.css";

export default class PostCart extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className={cartCss.cartWrapper}>
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
            <div className={cartCss.likeWrapper}>
              <i className={"fas fa-thumbs-up"} />
            </div>
            <div className={cartCss.dislikeWrapper}>
              <i className={"fas fa-thumbs-down"} />
            </div>
          </div>

          <div className={cartCss.actionBtnWrapper}>
            <div className={cartCss.bookmarkWrapper}>
              <i className={"fas fa-bookmark"}> </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
