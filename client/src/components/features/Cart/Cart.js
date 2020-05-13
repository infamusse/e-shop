import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Grid } from "@material-ui/core";

import clsx from "clsx";

import { CartProduct } from "../../common/CartProduct/CartProduct";
import { DialogForm } from "../../features/DialogForm/DialogForm";

import { snackbarSuccess, snackbarError } from "../../../redux/snackbarRedux";

import {
  addProduct,
  removeProduct,
  getOrderProducts,
  getSumPrice,
  sendOrder,
} from "../../../redux/orderRedux";

import styles from "./Cart.module.scss";

const CartComponent = ({ products, sumPrice, sendOrder, snackbarSuccess }) => {
  const [form, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleConfirm = (order) => {
    handleSendOrder(order);
  };

  const handleSendOrder = (order) => {
    sendOrder(order)
      .then(() => {
        snackbarSuccess("Order success");
        handleClose();
      })
      .catch((err) => snackbarError(`${err.message.status}`));
  };

  return (
    <div className={clsx(styles.root)}>
      {products.length ? (
        products.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            count={product.count}
          />
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
          <Button
            onClick={handleOpenForm}
            variant="contained"
            disabled={!sumPrice || !products.length}
            color="primary"
          >
            order
          </Button>
        </Grid>
      </Grid>

      <DialogForm
        open={form}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        products={products}
        sumPrice={sumPrice}
      />
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
  sendOrder: (order) => dispatch(sendOrder(order)),
  snackbarSuccess: (text) => dispatch(snackbarSuccess(text)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(CartComponent);

export { Container as Cart };
