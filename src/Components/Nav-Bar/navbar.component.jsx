import "./navbar.styles.scss";

const animations = {
  fadeIn: "animate__animated animate__fadeIn animate__delay-1s",
};

const NavBar = () => {
  return (
    <div className="navbar-container">
      <h1 className={animations.fadeIn}>bad sunday</h1>
    </div>
  );
};

export default NavBar;
