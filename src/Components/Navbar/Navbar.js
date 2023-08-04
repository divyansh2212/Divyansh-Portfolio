import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const location = useLocation();

  const [activenav, setActivenav] = useState("home");

  useEffect(() => {
    setActivenav(location.hash.substring(1));
  }, [location.hash]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.imgcontainer}>
        <a
          href="https://www.linkedin.com/in/divyansh2212/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/90034292?v=4"
            className={styles.img}
            alt=""
          />
        </a>
      </div>
      <ul className={styles.list}>
        <Link
          className={styles.listitems}
          exact
          onClick={() => {
            setActivenav("experience");
          }}
          to="#experience"
          smooth
        >
          <Icon icon="ic:round-work-outline" />
          <span className={styles.listitemname}>Experience</span>
        </Link>

        <Link
          className={styles.listitems}
          exact
          onClick={() => {
            setActivenav("projects");
          }}
          to="#projects"
          smooth
        >
          <Icon icon="ic:round-code-off" />
          <span className={styles.listitemname}>Projects</span>
        </Link>

        <Link
          className={styles.listitems}
          exact
          onClick={() => {
            setActivenav("skills");
          }}
          to="#skills"
          smooth
        >
          <Icon icon="streamline:interface-edit-magic-wand-design-magic-star-supplies-tool-wand" />
          <span className={styles.listitemname}>Skills</span>
        </Link>

        <Link
          className={styles.listitems}
          exact
          onClick={() => {
            setActivenav("achievements");
          }}
          to="#achievements"
          smooth
        >
          <Icon icon="mdi:achievement-variant-outline" />
          <span className={styles.listitemname}>Achievements</span>
        </Link>

        <Link
          className={styles.listitems}
          exact
          onClick={() => {
            setActivenav("contact");
          }}
          to="#contact"
          smooth
        >
          <Icon icon="fluent:contact-card-28-regular" />
          <span className={styles.listitemname}>Contact</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
