import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Container, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import styles from "./Contact.module.scss";

const Contact = ({ className, children }) => (
  <Container className={clsx(className, styles.root)}>
    <h2>Contact</h2>
    <p>Contact with autor:</p>
    <ul>
      <li>
        GIT:
        <IconButton className={styles.gitIcon}>
          <a target="_blank" href="https://github.com/infamusse/">
            <GitHubIcon />
          </a>
        </IconButton>
      </li>
      <li>
        LinkedIn:
        <IconButton className={styles.linkedInIcon}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mateusz-jałowiczor-832a3756/"
          >
            <LinkedInIcon />
          </a>
        </IconButton>
      </li>
    </ul>
    {children}
  </Container>
);

Contact.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Contact };
