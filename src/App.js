import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Introduction from "./Components/Introduction/Introduction.js";
import styles from "./App.module.css";
import Experience from "./Components/Experience/Experience.js";
import { Breakline } from "./Components/Breakline.js";
import Projects from "./Components/Projects/Projects.js";
import Skills from "./Components/Skills/Skills.js";
import Footer from "./Components/Footer/Footer.js";
import Achievements from "./Components/Achievements/Achievements.js";

const App = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Introduction />
      <Breakline />
      <Experience />
      <Breakline />
      <Projects/>
      <Breakline />
      <Skills/>
      <Breakline />
      <Achievements/>
      <Footer/>
    </div>
  );
};

export default App;
