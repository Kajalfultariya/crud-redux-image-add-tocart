import React from "react";
import "../credit-card-styles.css";

function CreditCard({ cardInfo }) {
  const splitterIdx = [3, 7, 11, 15];
  const reducer = (accum, curr, index) => {
    accum += ` ${curr}${splitterIdx.includes(index) ? "_" : ""}`;
    return accum;
  };
  return (
    <div className="card">
      <div className="bank-name">{cardInfo.bankName}</div>
      <div className="person-info">
        <div className="card-numbers">
          <div>
            {cardInfo.number
              .split("")
              .reduce(reducer, "")
              .split("_")
              .map((item) => (
                <span className="splitter">{item}</span>
              ))}
            <div className="small-numbers">1234</div>
          </div>
        </div>

        <div className="exp-date">
          <div className="valid-thru">
            <span>VALID</span> <span>THRU</span>
          </div>
          {cardInfo.expDate}
        </div>
        <div className="holder-name">{cardInfo.name}</div>
      </div>
    </div>
  );
}

export default CreditCard;
