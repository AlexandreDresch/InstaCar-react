import React from "react";

import Logo from "./components/Logo";
import Photo from "./components/Photo";

const Main = () => {
  return (
    <>
      <Logo />
      <Photo count={10} file={require("./assets/images/pexels-alexgtacar-1592384.jpg")} />
      <Photo count={15 }file={require("./assets/images/pexels-mike-170811.jpg")} />
    </>
  )
}

export default Main;