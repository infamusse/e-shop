import React from "react";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

import clsx from "clsx";

import styles from "./CartIcon.module.scss";

const CartIcon = () => {
  return (
    <Fab className={clsx(styles.root, styles.hoverEffect)}>
      <ShoppingBasketOutlinedIcon />
    </Fab>
  );
};

export default CartIcon;
