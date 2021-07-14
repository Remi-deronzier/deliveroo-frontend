import logoDeliveroo from "../assets/images/logo-deliveroo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logoDeliveroo} alt="logo-deliveroo" />
      </div>
    </header>
  );
};

export default Header;
