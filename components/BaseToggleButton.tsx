import { Dispatch, SetStateAction } from "react";

interface ToggleButtonProps {
  toggleActive: boolean;
}

const BaseToggleButton: React.FC<ToggleButtonProps> = ({ toggleActive }) => {
  return (
    <svg
      width="58"
      height="29"
      viewBox="0 0 58 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="-1"
        width="56"
        height="27"
        rx="13.5"
        transform="matrix(1 0 0 -1 0 27)"
        fill="#7AF7FF"
        stroke="black"
        strokeWidth="2"
      />
      <rect
        x={toggleActive ? "30px" : "1px"}
        y="-1"
        width="27"
        height="27"
        rx="13.5"
        transform="matrix(1 0 0 -1 0 27)"
        fill="white"
        stroke="black"
        strokeWidth="2"
        id="toggle-button"
      />
    </svg>
  );
};

export default BaseToggleButton;
