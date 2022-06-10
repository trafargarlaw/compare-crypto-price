import { useState } from "react";

const CurrenciesList = () => {
  const [currencies, setCurrencies] = useState([
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Litecoin", symbol: "LTC" },
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState("BTC");

  return (
    <div className="currency-list-container">
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
  );
};

export default CurrenciesList;
