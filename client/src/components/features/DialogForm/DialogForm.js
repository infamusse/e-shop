import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit } = useForm();
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
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {product.title} count: {product.count}, price: {product.price}
                </li>
              ))}
            </ul>
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              autoFocus
              className={styles.orderInput}
              autoComplete="off"
              margin="dense"
              color="secondary"
              id="name"
              place="Your name"
              label="Name"
              id="users"
              name="user"
              fullWidth
              onChange={handleEvent}
            />
            <TextField
              required
              ref={register({ required: true })}
              className={styles.orderInput}
              color="secondary"
              placeholder="Your phone number"
              label="Phone"
              name="phone"
              type="number"
              onChange={handleOrderInfo}
            />
            <TextField
              required
              ref={register({ required: true })}
              className={styles.orderInput}
              color="secondary"
              label="Adress"
              name="adress"
              placeholder="Delivery adress"
              onChange={handleOrderInfo}
            />
            <TextField
              ref={register({ required: true })}
              className={styles.orderInput}
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

export { DialogForm };
