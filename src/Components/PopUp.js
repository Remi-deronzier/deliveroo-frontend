import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PopUp.css";

const PopUp = ({ popUp, totalPrice }) => {
  return (
    <div>
      {popUp && (
        <div className="pop-up-container">
          <div className="pop-up">
            <p>{`Votre commande de ${totalPrice} a bien été validée`}</p>{" "}
            <FontAwesomeIcon icon="check-square" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
