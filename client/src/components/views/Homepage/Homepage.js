import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Container } from "@material-ui/core";

import styles from "./Homepage.module.scss";

const Homepage = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Container className={styles.homePageContainer}>
      <div className={styles.homePageMainTextContainer}>
        <p className={styles.homePageMainText}>
          We believe in real <b>paper</b> feeling
        </p>
      </div>
      <div className={styles.homePageMainPhoto}></div>
    </Container>
    {children}
  </div>
);

Homepage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Homepage };
