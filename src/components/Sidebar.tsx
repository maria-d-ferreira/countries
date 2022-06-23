import React, { useState, useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";

import "../css/Sidebar.css";
interface Props {
  width: number;
  height: string;
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = props => {
  const { width, height, children } = props;
  const [xPosition, setX] = useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  useEffect(() => {
    setX(0);
  }, []);

  return (
    <>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        >
          <AiTwotoneStar />
        </button>
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
