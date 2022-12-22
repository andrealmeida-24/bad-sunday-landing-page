import React, { useState, useEffect, Fragment } from "react";
import Intro from "./Components/Intro_Component/intro.component";
import NavBar from "./Components/Nav-Bar/navbar.component";
import Directory from "./Components/Directory/directory.component";

function App() {
  const [canShowIntro, setCanShowIntro] = useState(true);
  const [canShowNavbar, setCanShowNavbar] = useState(false);
  const [canShowPage, setCanShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanShowIntro(false), 2600);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const timer = setTimeout(() => setCanShowNavbar(true), 2600);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const timerPage = setTimeout(() => setCanShowPage(true), 2610);
    return () => clearTimeout(timerPage);
  });

  return (
    <Fragment>
      {canShowNavbar ? <NavBar /> : ""}
      {canShowPage ? <Directory /> : ""}
      {canShowIntro ? <Intro /> : ""}
    </Fragment>
  );
}

export default App;
