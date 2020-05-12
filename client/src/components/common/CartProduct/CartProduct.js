import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Grid, IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import { addProduct, removeProduct } from "../../../redux/orderRedux";

import styles from "./CartProduct.module.scss";

const CartProductComponent = ({ product, removeProduct }) => {
  const { title, count, id } = product;

  const removeFromCart = (id) => {
    console.log("removeFromCart");
    removeProduct(id);
  };

  const stripStringAddDots = (string, chars) => {
    return `${string.slice(0, chars)}...`;
  };

  return (
    <Grid
      container
      className={styles.CartProductContainer}
      spacing={2}
      justify="space-between"
      alignItems="center"
    >
      <Link
        className={styles.cartProductLink}
        to={`${process.env.PUBLIC_URL}/product/${id}`}
      >
        <Grid item>{stripStringAddDots(title, 15)}</Grid>
      </Link>
      <Grid item>{count}</Grid>
      <IconButton
        onClick={() => removeFromCart(id)}
        className={styles.deleteIconButton}
      >
        <DeleteOutlineIcon />
      </IconButton>
    </Grid>
  );
};

CartProductComponent.propTypes = {
  product: PropTypes.object,
  removeProduct: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  removeProduct: (id) => dispatch(removeProduct(id)),
});

const CartProductContainer = connect(
  null,
  mapDispatchToProps
)(CartProductComponent);

export { CartProductContainer as CartProduct };
