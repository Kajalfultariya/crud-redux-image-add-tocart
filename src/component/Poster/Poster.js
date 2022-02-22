import React from "react";
import "../poster-styles.css";

function Poster({ image, title, text }) {
  return (
    <div className="outer">
      <div className="poster">
        <div className="image">
          <img src={image} alt="image" />
        </div>
        <h2 className="title">
          {title.split("").map((el, i) => {
            if (i === 0) {
              return <span className="letter first">{el}</span>;
            }
            if (i === title.length - 1) {
              return <span className="letter last">{el}</span>;
            }
            return <span className="letter middle">{el}</span>;
          })}
        </h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Poster;
