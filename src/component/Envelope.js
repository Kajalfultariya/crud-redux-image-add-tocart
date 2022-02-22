import React from "react";
import AddressLabel from "./address-label/AddressLabel";
//import "./address-styles.css";

const sender = {
  fname: "Plamen",
  lname: "Pentchev",
  nr: 10,
  street: "Widilostr.",
  city: "Hofheim am Taunus",
  plz: 65719
};

const recipient = {
  fname: "Sonya",
  lname: "Vatchkova",
  nr: 10,
  street: "Widilostr.",
  city: "Hofheim am Taunus",
  plz: 65719
};

function Envelope(props) {
  return (
    <div className="envelope">
      <div className="sender">
        <AddressLabel {...sender} />
      </div>
      <div className="recipient">
        <AddressLabel {...recipient} />
      </div>
      <div className="stamp">STAMP</div>
    </div>
  );
}

export default Envelope;
