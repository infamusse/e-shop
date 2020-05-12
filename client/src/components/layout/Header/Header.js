import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

import { Container } from "@material-ui/core";

import Logo from "../../common/Logo/Logo";

import styles from "./Header.module.scss";

const Header = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Logo />
    <Container>
      <NavLink
        className={clsx(styles.underlineEffect, styles.navLink)}
        color="inherit"
        exact
        title="Products"
        to={`${process.env.PUBLIC_URL}/products`}
      >
        Products
      </NavLink>
      <NavLink
        className={clsx(styles.underlineEffect, styles.navLink)}
        color="inherit"
        exact
        title="About"
        to={`${process.env.PUBLIC_URL}/about`}
      >
        About
      </NavLink>
      <NavLink
        className={clsx(styles.underlineEffect, styles.navLink)}
        color="inherit"
        exact
        title="Contact"
        to={`${process.env.PUBLIC_URL}/contact`}
      >
        Contact
      </NavLink>
    </Container>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Header };
