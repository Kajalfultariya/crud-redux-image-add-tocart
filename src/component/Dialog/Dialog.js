import React from "react";
import PropTypes from "react-props";
import "../dialog-styles.css";

function Dialog({ children }) {
  let items = React.Children.toArray(children);

  for (let index = items.length - 1; index >= 1; index--) {
    // const element = items[index];
    items.splice(index, 0, <span key={index} className="divide" />);
  }

  return <div className="dialog">{items}</div>;
}

const Title = ({ content }) => <div className="title">{content}</div>;
const Footer = ({ content }) => <div className="footer">{content}</div>;
const Body = ({ content }) => <div className="content">{content}</div>;

export { Dialog, Title, Body, Footer };
