import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Grid } from "@material-ui/core";

import clsx from "clsx";

import { CartProduct } from "../../common/CartProduct/CartProduct";
import { DialogForm } from "../../features/DialogForm/DialogForm";

import {
  addProduct,
  removeProduct,
  getOrderProducts,
  getSumPrice,
} from "../../../redux/orderRedux";

import styles from "./Cart.module.scss";

const CartComponent = ({ products, sumPrice }) => {
  const [form, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  return (
    <div className={clsx(styles.root)}>
      {products.length ? (
        products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))
      ) : (
        <p>Cart is empty</p>
      )}
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={styles.orderRowContainer}
      >
        <Grid item>
          <p>
            <b>SUM PRICE: {sumPrice}$</b>
          </p>
        </Grid>
        <Grid item>
          <Button onClick={handleOpenForm} variant="contained" color="primary">
            order
          </Button>
        </Grid>
      </Grid>

      <DialogForm open={form} />
    </div>
  );
};

CartComponent.propTypes = {
  products: PropTypes.array,
  sumPrice: PropTypes.number,
};

const mapStateToProps = (state) => ({
  products: getOrderProducts(state),
  sumPrice: getSumPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  removeProduct: (id) => dispatch(removeProduct(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(CartComponent);

export { Container as Cart };
