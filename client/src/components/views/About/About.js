import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { Container } from "@material-ui/core";

import styles from "./About.module.scss";

const About = ({ className, children }) => (
  <Container className={clsx(className, styles.root)}>
    <h2>About</h2>
    {children}
  </Container>
);

About.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { About };
