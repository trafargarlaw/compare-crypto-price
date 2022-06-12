import Image from "next/image";
import React from "react";
import BTC from "../public/images/BTC.png";
import ETH from "../public/images/ETH.png";
import LTC from "../public/images/LTC.png";
import XRP from "../public/images/XRP.png";

interface HeroProps {
  selectedCurrency: "BTC" | "ETH" | "LTC" | "XRP";
}

const Hero: React.FC<HeroProps> = ({ selectedCurrency }) => {
  let currencyImages = {
    BTC,
    ETH,
    LTC,
    XRP,
  };

  return (
    <section className="hero">
      <div className="hero__coin-img">
        <div>
          <Image src={BTC} alt="coin" />
        </div>
        <div>
          <Image
            src="/images/coin-shadow.png"
            height={60}
            width={198}
            alt="shadow"
          />
        </div>
      </div>
      <article className="hero__text">
        <h1>
          Look For the best <br /> Australian Crypto Price
        </h1>
        <p>
          Compare the rates on Australian cryptocurrency exchanges to find best
          offers
        </p>
      </article>
    </section>
  );
};

export default Hero;
