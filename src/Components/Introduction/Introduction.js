import React from "react";
import styles from "./Introduction.module.css";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.img}
        src="https://typeless.io/static/media/coding.6d171da87a4854819b72.png"
        alt=""
      ></img>
      <div className={styles.introduction}>
        <div className={styles.heading}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hey!👋 I'm Divyansh Mittal.")
                .pauseFor(100)
                .deleteAll()
                .typeString("An Aspiring Software Engineer!")
                .pauseFor(2000)
                .start()
                .deleteAll()
                .typeString("Divyansh Mittal");
            }}
          />
        </div>
        <p className={styles.para}>
          My name is Divyansh Mittal and I'm a Full Stack Developer and a
          problem solver from Delhi, India. I am continuously striving to
          improve my problem solving skills.
          <br />
          This is my digital garden, where I write about the things I'm working
          on and share what I've learned. 😊
        </p>
      </div>
    </div>
  );
};

export default Introduction;
