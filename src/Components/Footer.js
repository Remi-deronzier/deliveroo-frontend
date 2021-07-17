import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="p-footer">
        Made with{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{" "}
        at{" "}
        <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
          Le Reacteur
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/Remi-deronzier"
          target="_blank"
          rel="noreferrer"
        >
          Rémi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
