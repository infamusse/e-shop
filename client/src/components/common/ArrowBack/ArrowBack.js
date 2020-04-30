import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import clsx from "clsx";

import styles from "./ArrowBack.module.scss";

const ArrowBack = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  useEffect(() => {
    console.log("location", pathname);
  }, [pathname]);

  const backToHome = () => history.goBack();

  if (pathname != "/") {
    return (
      <div
        title="Back to home"
        onClick={backToHome}
        className={styles.arrowBackContainer}
      >
        <ArrowBackIcon className={styles.arrowBackFront} />
        <ArrowBackIcon className={styles.arrowBackBehind} />
      </div>
    );
  } else return null;
};

export default ArrowBack;
