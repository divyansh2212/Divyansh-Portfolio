import React from "react";
import styles from "./Achievements.module.css";
import { data } from "./data.js";

const Achievements = () => {
  return (
    <div id="achievements">
      <h1 className={styles.heading}>Achievements</h1>
      <ul className={styles.point_list}>
        {data.map((point) => {
          return <li>{point}</li>;
        })}
      </ul>
    </div>
  );
};

export default Achievements;
