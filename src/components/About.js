import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        aspernatur consectetur blanditiis, amet sequi, fuga hic optio odio
        dolorem neque iste, perspiciatis a nam eligendi explicabo id aut tempore
        alias!
      </p>
    </div>
  );
};

export default Rainbow(About);
