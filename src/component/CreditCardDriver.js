import React from "react";
import CreditCard from "./credit-card/CreditCard";

const creditCardInfo = {
  name: "Cardholder Name",
  expDate: "08/19",
  number: "1234567887654321",
  bankName: "Big Bank, Inc."
};

function CreditCardDriver({ cardInfo }) {
  return <CreditCard cardInfo={creditCardInfo} />;
}

export default CreditCardDriver;
