import React from "react";
import StaticTweet from "./static-tweet/StaticTweet";
import PropsTweet from "./props-tweet/PropsTweet";
import Tweet from "../classes/Tweet";
import Tweet2 from "../classes/Tweet2";

const tweet2 = new Tweet();
tweet2.author = {
  name: "Plamen Pentchev",
  handle: "plamenpentchev"
};
tweet2.gravatar = "c1d3b13fa5e46648d86d77de2ce0c7ea";
tweet2.message = "Another message from me 2";
tweet2.timestamp = "2020-12-11 11:02:17";
tweet2.likes = 77;
tweet2.retweets = 0;

const tweetObject = {
  message: "Something about cats.",
  gravatar: "c1d3b13fa5e46648d86d77de2ce0c7ea",
  author: {
    name: "catperson",
    handle: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 1,
  timestamp: "2016-07-30 21:24:37"
};

function Tweets(props) {
  return (
    <div className="App">
      <StaticTweet />
      <PropsTweet tweet={tweetObject} />
      <PropsTweet tweet={tweet2} />
      <PropsTweet
        tweet={new Tweet2()
          .Author({ name: "Plam", handle: "pentch" })
          .Message("Teste teste")
          .Gravatar("c1d3b13fa5e46648d86d77de2ce0c7ea")
          .Likes(3)
          .Retweets(0)
          .Timestamp("2019-07-30 21:24:37")}
      />
    </div>
  );
}
export default Tweets;
