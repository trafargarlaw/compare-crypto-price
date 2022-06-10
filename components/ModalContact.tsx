import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import { useClickOutside } from "../utils/hooks/useClickOutside";

interface ModalContactProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ModalContact: React.FC<ModalContactProps> = ({ setShowModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => setShowModal(false));
  return (
    <div className="modal-container">
      <div className="modal" ref={modalRef}>
        <button className="close-btn" onClick={() => setShowModal(false)}>
          <Image
            height={"30px"}
            width={"30px"}
            src="/images/btn-close.png"
            alt="close"
          />
        </button>
        <h1>Let&apos;s get in touch</h1>
        <div className="modal__form">
          <input
            className="modal__form_email"
            placeholder="Your e-mail"
            type="text"
          />
          <textarea
            className="modal__form_comment"
            placeholder="Type your comment"
          />
        </div>
        <button>SEND</button>
      </div>
    </div>
  );
};

export default ModalContact;
