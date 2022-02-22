import React from "react";
import moment from "moment";

function Message({ text }) {
  return <div className="message">{text}</div>;
}

const Time = ({ timestamp }) => (
  <span className="time">{moment(timestamp).fromNow()}</span>
);
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {count > 0 && <span className="retweet-count">{count}</span>}
    </span>
  );
};
const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};
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
