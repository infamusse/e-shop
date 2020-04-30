import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Container } from "@material-ui/core";

import { connect } from "react-redux";
import { getAllProducts, getLoadingState } from "../../../redux/productsRedux";

import styles from "./Homepage.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Container className={styles.homePageContainer}>
      <div className={styles.homePageMainTextContainer}>
        <p className={styles.homePageMainText}>
          We believe in real <b>paper</b> feeling
        </p>
      </div>
      <div className={styles.homePageMainPhoto}></div>
    </Container>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loading: getLoadingState(state),
});

const HomepageContainer = connect(mapStateToProps, null)(Component);

export {
  // Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
