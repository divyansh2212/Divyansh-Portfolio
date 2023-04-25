import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Introduction from "./Components/Introduction/Introduction.js";
import styles from "./App.module.css";
import Experience from "./Components/Experience/Experience.js";

const App = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Introduction />

      <hr
        style={{
          background: "white",
          color: "white",
          borderColor: "white",
          height: "1px",
          margin : "4% 1%"
        }}
      />
      <Experience />
    </div>
  );
};

export default App;
