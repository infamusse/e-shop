import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

import { hideSnackbar } from "../../../redux/snackbarRedux";
import { connect } from "react-redux";

import styles from "./Snackbar.module.scss";

const SnackbarComponent = ({
  text,
  showSnackbar,
  timeout,
  variant,
  hideSnackbar,
}) => {
  const [show, setShow] = useState(false);

  const closeSnackbar = () => {
    hideSnackbar();
  };

  useEffect(() => {
    setShow(showSnackbar);
    const autoClose = setTimeout(closeSnackbar, timeout);

    return () => {
      clearTimeout(autoClose);
    };
  }, [showSnackbar]);

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

SnackbarComponent.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  showSnackbar: PropTypes.bool,
  timeout: PropTypes.number,
};

SnackbarComponent.defaultProps = {
  timeout: 6000,
};

const mapDispatchToProps = { hideSnackbar: () => hideSnackbar() };

const Snackbar = connect(null, mapDispatchToProps)(SnackbarComponent);

export default Snackbar;
