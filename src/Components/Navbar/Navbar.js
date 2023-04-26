import React from "react";
import styles from "./Navbar.module.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.imgcontainer}>
        <a href="https://www.linkedin.com/in/divyansh2212/" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/90034292?v=4"
            className={styles.img}
          />
        </a>
      </div>
      <ul className={styles.list}>
        <li className={styles.listitems}>
          <Icon icon="ic:round-work-outline" />
          <span className={styles.listitemname}>Experience</span>
        </li>
        <li className={styles.listitems}>
          <Icon icon="ic:round-code-off" />
          <span className={styles.listitemname}>Projects</span>
        </li>
        <li className={styles.listitems}>
          <Icon icon="streamline:interface-edit-magic-wand-design-magic-star-supplies-tool-wand" />
          <span className={styles.listitemname}>Skills</span>
        </li>
        <li className={styles.listitems}>
          <Icon icon="mdi:achievement-variant-outline" />
          <span className={styles.listitemname}>Achievements</span>
        </li>
        <li className={styles.listitems}>
          <Icon icon="fluent:contact-card-28-regular" />
          <span className={styles.listitemname}>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
