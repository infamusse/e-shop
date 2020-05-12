import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { Container } from "@material-ui/core";

import styles from "./Contact.module.scss";

const Contact = ({ className, children }) => (
  <Container className={clsx(className, styles.root)}>
    <h2>Contact</h2>
    {children}
  </Container>
);

Contact.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Contact };
