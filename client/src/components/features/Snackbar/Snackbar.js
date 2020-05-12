import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

import styles from "./Snackbar.module.scss";

const Snackbar = ({ text, showSnackbar, timeout, variant }) => {
  const [show, setShow] = useState(false);

  const closeSnackbar = () => {
    setShow(false);
  };

  useEffect(() => {
    setShow(showSnackbar);
    const autoClose = setTimeout(closeSnackbar, timeout);

    return () => {
      clearTimeout(autoClose);
    };
  }, [showSnackbar, timeout]);

  return (
    <div className={styles.root}>
      <Collapse in={show}>
        <Alert variant="filled" severity={variant}>
          {text}
        </Alert>
      </Collapse>
    </div>
  );
};

Snackbar.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  showSnackbar: PropTypes.bool,
  timeout: PropTypes.number,
};

Snackbar.defaultProps = {
  timeout: 6000,
};

export default Snackbar;
