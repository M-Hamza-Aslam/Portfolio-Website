import Header from "./components/Header";
import DisplaySection from "./components/DisplaySection";
import "./App.css";
import React from "react";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer";
import AnimeCursor from "./features/AnimeCursor";

function App() {
  return (
    <div id="App">
      <div className="designDiv"></div>
      <div className="mainBody">
        <AnimeCursor />
        <Header />
        <DisplaySection />
        <MainSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
