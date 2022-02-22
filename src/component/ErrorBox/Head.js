import React from "react";

function Head({ children, number }) {
  return (
    <div>
      {React.Children.toArray(children)
        .slice(0, number)
        .map((e, i) => (
          <div key={i}>{e}</div>
        ))}
    </div>
  );
}

export default Head;
