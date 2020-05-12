import React from "react";
import { useLocation, Link } from "react-router-dom";

import styles from "./Logo.module.scss";

const Logo = () => {
  const { pathname } = useLocation();

  if (pathname !== "/") {
    return (
      <Link title="Home" to="/" className={styles.logoContainer}>
        <div className={styles.logoTextContainer}>
          <span className={styles.logoFirstLine}>book's</span>
          <span className={styles.logoSecondLine}>store</span>
        </div>
      </Link>
    );
  } else return null;
};

export default Logo;
