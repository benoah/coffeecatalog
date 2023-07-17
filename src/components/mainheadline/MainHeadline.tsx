import React, { FC } from "react";
import "../../sass/MainHeadline.scss";

const MainHeadline: FC = () => {
  return (
    <header className="headline">
      <h1 className="headline__text">
        Find the best <span className="headline__highlighted-text">Coffee</span>{" "}
        for you
      </h1>
    </header>
  );
};

export default MainHeadline;
