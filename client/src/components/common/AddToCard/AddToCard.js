import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { IconButton, TextField } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { addProduct } from "../../../redux/orderRedux";

import styles from "./AddToCart.module.scss";

const AddToCartComponent = ({ product, addProduct }) => {
  const [count, setCount] = useState(0);
  const { _id, price } = product;

  const addToCart = () => {
    console.log("ADDTOCART", _id, price, count);
    const product = { id: _id, price: price, count: parseInt(count) };
    addProduct(product);
  };

  return (
    <div>
      <IconButton onClick={addToCart} className={styles.addIconButton}>
        <AddShoppingCartIcon />
      </IconButton>
      <TextField
        className={styles.inputAmount}
        placeholder="Enter quantity"
        defaultValue="1"
        InputProps={{ inputProps: { min: 1, max: 9 } }}
        onChange={(e) => setCount(e.target.value)}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        label="quantity"
      />
    </div>
  );
};

AddToCartComponent.propTypes = {
  product: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

const Container = connect(null, mapDispatchToProps)(AddToCartComponent);

export { Container as AddToCard };
