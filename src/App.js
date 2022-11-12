import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import "./common.css";
import RoboticsLife from "./components/roboticslife/RoboticsLife";
import "./responsive.css";
import OurRobot from "./components/ourrobot/OurRobot";
import Develop from "./components/develop/Develop";
import MultiItems from "./components/news/News";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Items from "./components/footer/Footer.jsx";

function App() {
  const [ListItem] = useState(Items);

  return (
    <>
      <Header />
      <RoboticsLife />
      <OurRobot />
      <Develop />
      <MultiItems />
      <Contact />
      <Footer listitem={ListItem} />
    </>
  );
}

export default App;
