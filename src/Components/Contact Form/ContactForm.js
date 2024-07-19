import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailToLink = `mailto:mittaldivyansh2212@gmail.com?subject= ${formData.subject}&body=${formData.message}`;
    window.location.href = mailToLink;
  };

  return (
    <section id="contact">
      <h2 className={styles.heading}>Contact</h2>
      <h2 className={styles.leftPartHeader}>
        <HiOutlineMail fontSize={25} />
        &nbsp;Get in Touch
      </h2>
      <div class={styles.ContactContainer}>
        <div className={styles.leftPart}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.rightPart}>
          <div>
            Let's start a conversation! Whether you have a question, want to
            discuss a project, or just want to say hi, I'd love to hear from
            you. Fill out the form and let's connect.
          </div>
          <a
            className={styles.anchor}
            href="mailto:mittaldivyansh2212@gmail.com"
            rel="noreferrer"
          >
            <HiOutlineMail />
            &nbsp;mittaldivyansh2212@gmail.com
          </a>
          <a
            className={styles.anchor}
            href="https://github.com/divyansh2212"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
            &nbsp;divyansh2212
          </a>
          <a
            className={styles.anchor}
            href="https://www.linkedin.com/in/divyansh2212/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
            &nbsp;divyansh2212
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
