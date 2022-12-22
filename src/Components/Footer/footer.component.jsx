import "./footer.styles.scss";

const animations = {
  fadeIn: "animate__animated animate__fadeIn animate__delay-1s",
};

const Footer = () => {
  return (
    <div className={`footer-container ${animations.fadeIn}`}>
      <h1>bad sunday</h1>
      <p>
        We are a Portugal based clothing brand, inspired by self-expression and
        we offer an alternative way of thinking and living.
      </p>
      <div className="socials">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
    </div>
  );
};

export default Footer;
