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
import PropTypes from "prop-types";
import Tweet from "../../classes/Tweet";
import Tweet2 from "../../classes/Tweet2";


function PropsTweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <div className="auth-time">
          <Author author={tweet.author} />
          <Time timestamp={tweet.timestamp} />
        </div>

        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function hashValidator(props, propName, ComponentName) {
  if (props[propName].length !== 32) {
    return new Error(
      `Invalid property ${propName} supplied to 
      component ${ComponentName}. Hash must be 
      32 characters long.`
    );
  }
}

PropsTweet.propTypes = PropTypes.oneOfType([
  Tweet,
  Tweet2,
  PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired
    }).isRequired,
    timestamp: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    retweets: PropTypes.number,
    likes: PropTypes.number
  })
]);

export default PropsTweet;
