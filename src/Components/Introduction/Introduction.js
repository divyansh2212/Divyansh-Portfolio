import React from "react";
import styles from "./Introduction.module.css";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  return (
    <div className={styles.mainContainer}>
      <img
        src="https://typeless.io/static/media/coding.6d171da87a4854819b72.png"
        style={{ maxWidth: "25%" }}
      ></img>
      <div className={styles.introduction}>
        <div className={styles.heading}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello! I'm Divyansh Mittal.")
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
          Welcome to my portfolio website! I am a dedicated and passionate B.Tech student (ITE) at MAIT, Delhi. With a solid foundation in software engineering skills, including Java, C++, Data Structures, and Algorithms, I am constantly striving to enhance my problem-solving
          abilities. As an intern at Geekster, I have gained valuable
          industry experience. I am also a former intern at
          DRDO & GeeksforGeeks, where I had the opportunity to sharpen my skills and gain exposure to the latest technologies. As a curious and applied learner, I am constantly seeking new challenges and opportunities to
          expand my knowledge and skills. Whether you are looking for a passionate software engineer or simply want to learn more about my skills and experience, I invite you
          to explore my portfolio website and discover what sets me apart from the rest.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
