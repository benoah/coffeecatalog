import React from "react";
import "../../sass/NavigationBar.scss";
const HamburgerIcon: React.FC = () => {
  return (
    <svg
      style={{
        width: "44px",
        height: "42px",
      }}
      className="navbar__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="42"
      viewBox="0 0 44 42"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="40"
        rx="15"
        fill="url(#paint0_linear_4_5)"
        stroke="url(#paint1_linear_4_5)"
        strokeWidth="2"
      />
      <circle cx="18" cy="15" r="3" fill="#4D515A" />
      <circle cx="27" cy="15" r="3" fill="#4D515A" />
      <circle cx="27" cy="27" r="3" fill="#4D515A" />
      <circle cx="18" cy="27" r="3" fill="#4D515A" />
      <defs>
        <linearGradient
          id="paint0_linear_4_5"
          x1="5"
          y1="2.40547e-07"
          x2="35"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#222931" />
          <stop offset="1" stopColor="#11141B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_5"
          x1="0"
          y1="0"
          x2="39"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#232732" />
          <stop offset="1" stopColor="#0E1118" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HamburgerIcon;
