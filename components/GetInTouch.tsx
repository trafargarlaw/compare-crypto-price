import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import ballShadow from "../public/images/ball-shadow.png";
import ball from "../public/images/ball.png";

interface GetInTouchProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ setShowModal }) => {
  return (
    <footer className="get-in-touch">
      <div className="get-in-touch__title">
        <h1>Got feedback? We got you!</h1>
        <button className="btn-get-in-touch" onClick={() => setShowModal(true)}>
          GET IN TOUCH
        </button>
      </div>
      <div className="get-in-touch__ball-and-shadow">
        <div className="get-in-touch__ball-and-shadow_ball">
          <Image src={ball} alt="ball" />
        </div>
        <div className="get-in-touch__ball-and-shadow_shadow">
          <Image src={ballShadow} alt="ball" />
        </div>
      </div>
    </footer>
  );
};

export default GetInTouch;
