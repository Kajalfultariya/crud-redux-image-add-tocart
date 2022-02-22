import React from "react";
import "../../component/address-styles.css";

function AddressLabel({ fname, lname, nr, street, city, plz }) {
  return (
    <div className="address">
      <div className="address-item names">
        {fname} {lname}
      </div>
      <div className="address-item street-nr">
        {nr} {street}
      </div>
      <div className="address-item city-plz">
        {plz} {city}
      </div>
    </div>
  );
}

export default AddressLabel;
