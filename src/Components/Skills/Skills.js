import React from "react";
import styles from "./Skills.module.css";
import { proficient } from "./proficient.js";
import { familiar } from "./familiar.js";

const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.skillbox}>
        {proficient.map((image) => {
          return (
            <div className={styles.item}>
              <img src={image.link} width="120" alt={image.alt} />
              <span>{image.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
