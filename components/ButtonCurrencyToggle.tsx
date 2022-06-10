import { useState } from "react";
import BaseToggleButton from "./BaseToggleButton";

const ButtonCurrencyToggle = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <button
      className="btn-select-currency"
      onClick={() => setToggleActive(!toggleActive)}
    >
      <span>AUD</span>
      <div>
        <BaseToggleButton toggleActive={toggleActive} />
      </div>
      <span>USD</span>
    </button>
  );
};

export default ButtonCurrencyToggle;
