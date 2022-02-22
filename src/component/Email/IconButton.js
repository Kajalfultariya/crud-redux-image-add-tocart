import React from "react";

function IconButton({ children }) {
  return (
    <button style={{ marginTop: "20px" }}>
      <i className="target-icon" />
      <p>{React.Children.count(children)}</p>
      <em>{children}</em>
    </button>
  );
}

export default IconButton;
