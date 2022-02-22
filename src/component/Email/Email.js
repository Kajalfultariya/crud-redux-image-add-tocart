import React from "react";
import "../email-style.css";
import moment from "moment";

function Email({ sender, recipient, subject, date, message }) {
  return (
    <div className="email">
      <div className="pin item">
        <input type="checkbox" />
      </div>
      <div className="check item">
        <i className="fa fa-thumb-tack" aria-hidden="true"></i>
      </div>
      <div className="email-content item">
        <span className="fromto">
          <span className="address">
            <label htmlFor="from" className="label">
              From:
            </label>
            <span id="from" className="sender">
              {sender}
            </span>
          </span>
          <span className="address">
            <label htmlFor="to" className="label">
              To:
            </label>
            <span id="to" className="reciever">
              {recipient}
            </span>
          </span>
        </span>
        <span className="subject">
          <label htmlFor="to" className="label">
            Subject:
          </label>
          <span id="to">{subject}</span>
        </span>
        <span className="content">{message}</span>
      </div>
      <div className="date">{moment(date).format("MMM DD")}</div>
    </div>
  );
}

export default Email;
