import React, { useEffect } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { CartIcon } from "../../common/CartIcon/CartIcon";
import ArrowBack from "../../common/ArrowBack/ArrowBack";
import Snackbar from "../../features/Snackbar/Snackbar";

import { connect } from "react-redux";
import { getSnackbarStatus } from "../../../redux/snackbarRedux";

import styles from "./MainLayout.module.scss";

const Component = ({ className, children, snackbar }) => {
  useEffect(() => {}, [snackbar]);
  const { show, text, variant } = snackbar;

  return (
    <div className={clsx(className, styles.root)}>
      <Header />
      <Snackbar showSnackbar={show} text={text} variant={variant} />
      <ArrowBack />
      <CartIcon />
      {children}
      <Footer />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  snackbar: getSnackbarStatus(state),
});

const Container = connect(mapStateToProps, null)(Component);

export { Container as MainLayout, Component as MainLayoutComponent };
