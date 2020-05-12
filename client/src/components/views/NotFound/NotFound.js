import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Container } from "@material-ui/core";

import styles from "./NotFound.module.scss";

const NotFound = ({ className, children }) => (
  <Container className={clsx(className, styles.root)}>
    <h2>NotFound</h2>
    {children}
  </Container>
);

NotFound.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { NotFound };
