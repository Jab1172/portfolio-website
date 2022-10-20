import React from "react";
import Resume from "../../assets/_Joel Bascombe Resume _.pdf";

export const cta = () => {
  return (
    <div classname="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default cta;
