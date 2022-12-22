import { useContext } from "react";
import { ModalContext } from "../../../Contexts/context";
import "./display-message.styles.scss";

const DisplayMessage = ({ ...props }) => {
  const { symbol, pTextL1, pTextL2 } = { ...props };
  const { modalShow, setModalShow } = useContext(ModalContext);
  if (modalShow !== true) return null;
  return (
    <div onClick={() => setModalShow(false)} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="message-container"
      >
        <span onClick={() => setModalShow(false)} className="close-btn">
          X
        </span>
        <div className="modal-text">
          <i className={symbol}></i>
          <p>
            {pTextL1}
            <br />
            {pTextL2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMessage;
