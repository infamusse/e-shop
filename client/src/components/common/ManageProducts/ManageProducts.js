import React from "react";
import { connect } from "react-redux";

import { TextField } from "@material-ui/core";

import {
  searchProduct,
  fetchProductsFromAPI,
} from "../../../redux/productsRedux";

import styles from "./ManageProducts.module.scss";

const ManageProductsComponent = ({ searchProduct, fetchProduct }) => {
  const handleSearch = (searchWord) => {
    searchWord.length ? searchProduct(searchWord) : fetchProduct();
  };

  return (
    <div className={styles.container}>
      <TextField
        autoComplete="off"
        margin="dense"
        InputProps={{ inputProps: { minLength: 1, maxLength: 20 } }}
        className={styles.orderInput}
        color="secondary"
        placeholder="Search products"
        name="Search products"
        variant="outlined"
        onInput={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchProduct: (searchWord) => dispatch(searchProduct(searchWord)),
  fetchProduct: () => dispatch(fetchProductsFromAPI()),
});

const Container = connect(null, mapDispatchToProps)(ManageProductsComponent);

export { Container as ManageProducts };
