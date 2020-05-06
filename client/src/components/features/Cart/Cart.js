import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import clsx from "clsx";

import { CartProduct } from "../../common/CartProduct/CartProduct";

import {
  addProduct,
  removeProduct,
  getOrderProducts,
  getSumPrice,
} from "../../../redux/orderRedux";

import styles from "./Cart.module.scss";

const CartComponent = ({ products, sumPrice }) => {
  return (
    <div className={clsx(styles.root)}>
      {products.length ? (
        products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))
      ) : (
        <p>Cart is empty</p>
      )}
      <p>
        <b>SUM PRICE: {sumPrice}$</b>
      </p>
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
