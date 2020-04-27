import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

import { Container } from "@material-ui/core";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Header.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Container>
      <NavLink
        className={clsx(styles.underlineEffect, styles.navLink)}
        color="inherit"
        exact
        to={`${process.env.PUBLIC_URL}/`}
      >
        Home
      </NavLink>
      <NavLink
        className={clsx(styles.underlineEffect, styles.navLink)}
        color="inherit"
        exact
        to={`${process.env.PUBLIC_URL}/about`}
      >
        About
      </NavLink>
      <NavLink
        className={clsx(styles.underlineEffect, styles.navLink)}
        color="inherit"
        exact
        to={`${process.env.PUBLIC_URL}/contact`}
      >
        Contact
      </NavLink>
    </Container>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
