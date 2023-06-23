import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ];
  const randomNumber = Math.floor(Math.random() * 7);
  console.log({ randomNumber });
  const randomColor = colors[randomNumber];
  const className = randomColor + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
