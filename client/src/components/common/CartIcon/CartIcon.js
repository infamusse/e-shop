import React, { useState } from "react";
import PropTypes from "prop-types";

import { Fab, Collapse } from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

import { Cart } from "../../features/Cart/Cart";

import { getOrderProducts } from "../../../redux/orderRedux";
import { connect } from "react-redux";

import clsx from "clsx";

import styles from "./CartIcon.module.scss";

const CartIcon = ({ products }) => {
  const [showCart, changeShowCart] = useState(false);

  const handleShowCart = () => {
    changeShowCart(!showCart);
  };

  return (
    <div>
      <Collapse in={showCart}>
        <Cart />
      </Collapse>
      <div
        className={clsx(
          styles.CartNotifaction,
          products.length > 0 && styles.showCartNotifaction
        )}
      >
        <p>{products.length}</p>
      </div>
      <Fab
        onClick={handleShowCart}
        title="Cart"
        className={clsx(
          styles.root,
          styles.hoverEffect,
          showCart && styles.active
        )}
      >
        <ShoppingBasketOutlinedIcon />
      </Fab>
    </div>
  );
};

CartIcon.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  products: getOrderProducts(state),
});

const Container = connect(mapStateToProps, null)(CartIcon);

export { Container as CartIcon };
