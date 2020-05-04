import React from "react";
import PropTypes from "prop-types";

import { IconButton, TextField } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import styles from "./AddToCart.module.scss";

const AddToCart = () => {
  return (
    <div>
      <IconButton className={styles.addIconButton}>
        <AddShoppingCartIcon />
      </IconButton>
      <TextField
        className={styles.inputAmount}
        placeholder="Enter quantity"
        defaultValue="1"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        label="quantity"
      />
    </div>
  );
};

AddToCart.propTypes = {};

export default AddToCart;
