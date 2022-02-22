import React from "react";
import Poster from "./Poster/Poster";

const poster = {
  image: "./react.png",
  title: "REACT",
  text: "The best thing since jQuery, probably."
};

function PosterDriver(params) {
  return <Poster {...poster} />;
}

export default PosterDriver;
