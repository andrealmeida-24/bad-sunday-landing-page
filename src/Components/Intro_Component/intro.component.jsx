import "./intro.styles.scss";
import FullHeight from "react-full-height";
import "animate.css";

const animations = {
  fadeInUp: "animate__animated animate__fadeInDownBig",
  fadeOutUp: "animate__animated animate__slideOutUp animate__delay-2s",
};

const Intro = () => {
  return (
    <FullHeight className={`intro-container ${animations.fadeOutUp}`}>
      <h1 className={animations.fadeInUp}>bad sunday</h1>
    </FullHeight>
  );
};

export default Intro;
