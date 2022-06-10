import { Dispatch, SetStateAction, useState } from "react";
import ButtonCurrencyToggle from "./ButtonCurrencyToggle";

interface FiltersProps {
  filters: string[];
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
}

const Filters: React.FC<FiltersProps> = ({
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  return (
    <div className="filters-container">
      <div>
        <span className="label">MODE</span>
        <ButtonCurrencyToggle />
      </div>
      <div className="filters">
        <div className="filters__header">
          <span className="label">CHOOSE FEATURES</span>
          <button
            className="label"
            onClick={() => {
              setSelectedFilters(filters);
            }}
          >
            Choose all
          </button>
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
