import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UpperNav from "./components/UpNav";
import React, { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [showFooter, setshowFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeNav, setactiveNav] = useState("#home");

  const handleScroll = (event) => {
    if (event.currentTarget.scrollTop > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
      setshowFooter(true);
    } else {
      // if scroll up show the navbar
      setShow(true);
      setshowFooter(false);
    }
    // remember current page location to use in the next move
    setLastScrollY(event.currentTarget.scrollTop);
  };

  return (
    <div className="mainContainer flex overflow-scroll">
      <div className="w-screen h-screen overflow-auto" onScroll={handleScroll}>
        <Header />
        <Nav
          show={showFooter}
          activeSection={activeNav}
          changeActive={setactiveNav}
        />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <UpperNav
        show={show}
        activeSection={activeNav}
        changeActive={setactiveNav}
      />
    </div>
  );
}

export default App;
