import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { Container } from "@material-ui/core";

import styles from "./About.module.scss";

const About = ({ className, children }) => (
  <Container className={clsx(className, styles.root)}>
    <h2>About</h2>
    <p>
      It's simple full-stack e-commerce app. Still developing. New feature's
      soon!
    </p>
    {children}
  </Container>
);

About.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { About };
