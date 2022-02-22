import React from "react";
import Author from "./Author";
import Avatar from "./Avatar";
import {
  Message,
  Time,
  ReplyButton,
  RetweetButton,
  LikeButton,
  MoreOptionsButton
} from "./Message";
import "../tweet-styles.css";

function StaticTweet(params) {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <div className="auth-time">
          <Author />
          <Time />
        </div>

        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

export default StaticTweet;
