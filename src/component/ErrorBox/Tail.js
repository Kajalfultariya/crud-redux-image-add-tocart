import React from "react";

function Tail({ children, number }) {
  const start = React.Children.count(children) - number;
  if (start < 0) {
    return <div></div>;
  }
  console.log(`START: ${start}`);
  return (
    <div>
      {React.Children.toArray(children)
        .slice(start, start + number)
        .map((e, i) => (
          <div key={i}>{e}</div>
        ))}
    </div>
  );
}

export default Tail;
