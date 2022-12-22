import "./hero.styles.scss";
import Form from "../Form/form.component";
import DisplayMessage from "../Display Messages/Display Message/display-message.component";

const animations = {
  fadeIn: "animate__animated animate__fadeIn animate__delay-1s",
};

const Hero = () => {
  return (
    <div className={`hero-container ${animations.fadeIn}`}>
      <DisplayMessage
        symbol="fa-solid fa-circle-check"
        pTextL1="Your account was successfuly created. "
        pTextL2="You'll be informed when we go live!"
      />
      <h1>We are almost there.</h1>
      <Form />
    </div>
  );
};

export default Hero;
