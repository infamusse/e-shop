import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchProductsFromAPI } from "./productsRedux";

const DataWrapper = ({ fetchProduct, children }) => {
  useEffect(() => {
    fetchProduct();
  }, []);
  return [children];
};

DataWrapper.propTypes = {
  fetchProduct: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.string,
  }),
};

const mapDispatchToProps = { fetchProduct: fetchProductsFromAPI };

const Container = connect(null, mapDispatchToProps)(DataWrapper);

export { Container as DataWrapper };
