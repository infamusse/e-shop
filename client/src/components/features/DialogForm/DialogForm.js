import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import styles from "./DialogForm.module.scss";

const DialogForm = ({
  open,
  products,
  handleClose,
  handleConfirm,
  sumPrice,
}) => {
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
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Order form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {products.map(({ id, title, count, price }) => (
              <p key={id}>
                {title} quantity: {count}, price: {price}
              </p>
            ))}
            <b>Sum: {sumPrice}$</b>
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              autoFocus
              autoComplete="off"
              InputProps={{ inputProps: { minLength: 1, maxLength: 20 } }}
              className={styles.orderInput}
              margin="dense"
              color="secondary"
              place="Your name"
              label="Name"
              id="users"
              name="user"
              fullWidth
              onChange={handleEvent}
            />
            <TextField
              required
              className={styles.orderInput}
              autoComplete="off"
              InputProps={{
                inputProps: { min: 10000000, maxLength: 100000000 },
              }}
              color="secondary"
              placeholder="Your phone number"
              label="Phone"
              name="phone"
              type="number"
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
              placeholder="Delivery adress"
              onChange={handleOrderInfo}
            />
            <TextField
              className={styles.orderInput}
              autoComplete="off"
              InputProps={{ inputProps: { maxLength: 100 } }}
              color="secondary"
              label="Info"
              multiline
              placeholder="Info about products"
              name="message"
              fullWidth
              rowsMax="4"
              onChange={handleEvent}
            />
            <DialogActions>
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
