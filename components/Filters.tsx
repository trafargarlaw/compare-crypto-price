import React, { useState } from "react";
import ButtonCurrencyToggle from "./ButtonCurrencyToggle";

const Filters = () => {
  const [filters, setFilters] = useState([
    "Two-factor Authentication",
    "Instant Verification",
    "Accept fiat currency",
    "Affiliate Program",
  ]);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="filters-container">
      <div>
        <span className="label">MODE</span>
        <ButtonCurrencyToggle />
      </div>
      <div className="filters">
        <div className="filters__header">
          <span className="label">CHOOSE FEATURES</span>
          <span className="label">Choose all</span>
        </div>
        <ul className="filters__list">
          {filters.map((filter, index) => (
            <li
              key={index}
              className={`${
                selectedFilters.some((selected) => selected === filter)
                  ? "selected-filter"
                  : ""
              }`}
            >
              <button
                onClick={() => {
                  if (selectedFilters.some((selected) => selected === filter)) {
                    setSelectedFilters(
                      selectedFilters.filter((selected) => selected !== filter)
                    );
                  } else {
                    setSelectedFilters([...selectedFilters, filter]);
                  }
                }}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
