import React from "react";

function Message(propp) {
  return <div className="message">This is less then 140 characters</div>;
}

const Time = () => <span className="time">4h ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);
export {
  Message,
  Time,
  ReplyButton,
  RetweetButton,
  LikeButton,
  MoreOptionsButton
};
