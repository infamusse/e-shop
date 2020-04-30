import React from "react";
import PropTypes from "prop-types";

import styles from "./Footer.module.scss";

import { Container } from "@material-ui/core";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <p className={styles.footerText}>©Mateusz Jałowiczor 2020</p>
      </Container>
    </div>
  );
};

export default Footer;
