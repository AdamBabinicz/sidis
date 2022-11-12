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
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
}

export default App;
