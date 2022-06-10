import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__coin-img">
        <div>
          <Image src="/images/BTC.svg" height={287} width={174} alt="coin" />
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
      <div>
        <h1>
          Look For the best <br /> Australian Crypto Price
        </h1>
        <p>
          Compare the rates on Australian cryptocurrency exchanges to find best
          offers
        </p>
      </div>
    </div>
  );
};

export default Hero;
