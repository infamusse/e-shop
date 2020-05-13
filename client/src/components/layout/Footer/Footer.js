import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Footer.module.scss";

import { Container } from "@material-ui/core";

const Footer = () => {
  return (
    <Container className={styles.footer}>
      <p className={styles.footerTextLink}>
        <NavLink exact title="About" to={`${process.env.PUBLIC_URL}/about`}>
          About
        </NavLink>
      </p>
      <p className={styles.footerTextLink}>
        <NavLink exact title="Contact" to={`${process.env.PUBLIC_URL}/contact`}>
          Contact
        </NavLink>
      </p>
      <p className={styles.footerTextLink}>
        <a target="_blank" href="https://github.com/infamusse/">
          ©Mateusz Jałowiczor 2020
        </a>
      </p>
    </Container>
  );
};

export default Footer;
