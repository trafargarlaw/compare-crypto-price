import { Dispatch, SetStateAction, useRef, useState } from "react";

interface CurrenciesListProps {
  selectedCurrency: string;
  setSelectedCurrency: Dispatch<SetStateAction<"BTC" | "ETH" | "LTC" | "XRP">>;
}

const CurrenciesList: React.FC<CurrenciesListProps> = ({
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [currencies, setCurrencies] = useState<
    { name: string; symbol: "BTC" | "ETH" | "LTC" | "XRP" }[]
  >([
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Litecoin", symbol: "LTC" },
  ]);

  const ref = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState(0);

  return (
    <>
      <div
        className="currency-list-container"
        ref={ref}
        onScroll={(e) => {
          setRange(e.currentTarget.scrollLeft);
        }}
      >
        <div className="currency-list-background">
          <ul className="currency-list">
            {currencies.map((currency) => (
              <li
                className={`currency-list__item  ${
                  selectedCurrency === currency.symbol ? "active" : ""
                }`}
                key={currency.symbol}
              >
                <button
                  className={`btn-currency-list  ${
                    selectedCurrency === currency.symbol ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCurrency(currency.symbol)}
                >
                  <div className="btn-currency-list__label">
                    <span>{currency.name}</span>
                    <span>{currency.symbol}</span>
                  </div>
                  <div className="btn-currency-list__img">
                    <img src={`/images/${currency.symbol}-bg.svg`} alt="bg" />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="range-slider">
        <input
          type="range"
          min={0}
          value={range}
          onChange={(e) => {
            let scrollWidth =
              ref.current!.scrollWidth - ref.current!.clientWidth;
            e.currentTarget.max! = scrollWidth.toString();
            ref.current!.scrollLeft = parseInt(e.target.value);
            setRange(parseInt(e.target.value));
          }}
        />
      </div>
    </>
  );
};

export default CurrenciesList;
