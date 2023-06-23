import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/about");
    }, 2000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        aspernatur consectetur blanditiis, amet sequi, fuga hic optio odio
        dolorem neque iste, perspiciatis a nam eligendi explicabo id aut tempore
        alias!
      </p>
    </div>
  );
};

export default Contact;
