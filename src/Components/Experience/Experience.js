import React from "react";
import styles from "./Experience.module.css";
import Timeline from "../Timeline/Timeline";
import { data } from "./data";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className={styles.heading}>Experience</h1>
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
