import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    const mailToLink = `mailto:gurmeetsingh222003@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
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
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
            Here is a good spot for a message to your readers to let them know
            how best to reach out to you.
          </div>
          <a
            className={styles.anchor}
            href="mailto:mittaldivyansh2212@gmail.com"
          >
            <HiOutlineMail />
            &nbsp;mittaldivyansh2212@gmail.com
          </a>
          <a
            className={styles.anchor}
            href="https://github.com/divyansh2212"
            target="_blank"
          >
            <AiFillGithub />
            &nbsp;divyansh2212
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
