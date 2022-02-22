import React from "react";

const FirstChildOnly = ({ children }) => (
  <div>{React.Children.toArray(children)[0]}</div>
);

const LastChildOnly = ({ children }) => (
  <div>
    {React.Children.toArray(children)[React.Children.count(children) - 1]}
  </div>
);

export { FirstChildOnly, LastChildOnly };
