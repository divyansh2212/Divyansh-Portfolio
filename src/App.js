import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Introduction from "./Components/Introduction/Introduction.js";
import styles from "./App.module.css";
import Experience from "./Components/Experience/Experience.js";
import { Breakline } from "./Components/Breakline.js";
import Projects from "./Components/Projects/Projects.js";

const App = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Introduction />
      <Breakline />
      <Experience />
      <Breakline />
      <Projects/>
    </div>
  );
};

export default App;
