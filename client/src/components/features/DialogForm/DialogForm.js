import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";

import styles from "./DialogForm.module.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogForm = ({
  open,
  products,
  handleClose,
  handleConfirm,
  sumPrice,
}) => {
  useEffect(() => {
    createOrder({
      products: products.map(({ id, count }) => {
        return {
          product: id,
          count: count,
        };
      }),
    });
  }, [products]);

  const [order, createOrder] = useState({});

  const { handleSubmit } = useForm();
  const onSubmit = () => handleConfirm(order);

  const handleEvent = (event) => {
    createOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleOrderInfo = (event) => {
    createOrder({
      ...order,
      orderInfo: {
        ...order.orderInfo,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Order form</DialogTitle>
        <DialogContent className={styles.DialogContent}>
          {products.map(({ id, title, count, price }) => (
            <div key={id}>
              <p>
                {title} quantity: {count}, price: {price}
              </p>
            </div>
          ))}
          <p>
            <b>Sum: {sumPrice}$</b>
          </p>
          <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              autoFocus
              autoComplete="off"
              InputProps={{ inputProps: { minLength: 1, maxLength: 20 } }}
              className={styles.orderInput}
              color="secondary"
              placeholder="Your name"
              label="Name"
              name="user"
              variant="outlined"
              onChange={handleEvent}
            />
            <TextField
              required
              className={styles.orderInput}
              autoComplete="off"
              color="secondary"
              placeholder="Your phone number"
              label="Phone"
              name="phone"
              type="number"
              variant="outlined"
              onChange={handleOrderInfo}
            />
            <TextField
              required
              autoComplete="off"
              InputProps={{ inputProps: { minLength: 5, maxLength: 30 } }}
              className={styles.orderInput}
              color="secondary"
              label="Adress"
              name="adress"
              rows="3"
              multiline
              fullWidth
              placeholder="Delivery adress"
              variant="outlined"
              onChange={handleOrderInfo}
            />
            <TextField
              className={styles.orderInput}
              autoComplete="off"
              InputProps={{ inputProps: { maxLength: 100 } }}
              color="secondary"
              label="Info"
              rows="3"
              multiline
              placeholder="Info about products"
              name="message"
              fullWidth
              rowsMax="4"
              variant="outlined"
              onChange={handleEvent}
            />
            <DialogActions className={styles.actionRow}>
              <Button onClick={handleClose} variant="contained" color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Order
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

DialogForm.propTypes = {
  open: PropTypes.bool,
  products: PropTypes.array,
  handleClose: PropTypes.func,
  handleConfirm: PropTypes.func,
  sumPrice: PropTypes.number,
};

export { DialogForm };
