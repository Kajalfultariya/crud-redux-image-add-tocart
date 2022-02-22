import React from "react";
import "../error-box-styles.css";

function ErrorBox({ children }) {
  return (
    <div className="error-box">
      <div className="error-icon">
        <i className="fa fa-exclamation-triangle"></i>
      </div>
      <div className="error-message">{children}</div>
    </div>
  );
}

export default ErrorBox;
