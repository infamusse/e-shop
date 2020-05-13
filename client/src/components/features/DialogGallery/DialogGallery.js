import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import styles from "./DialogGallery.module.scss";

const DialogGallery = ({ open, handleClose, photos }) => {
  const [index, changeIndex] = useState(0);
  const maxIndex = photos.index;

  const prevPhoto = () => changeIndex(index - 1);
  const nextPhoto = () => changeIndex(index + 1);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div className={styles.photoConainer}>
          <img src={photos[index]} />
        </div>
      </DialogContent>
      <DialogActions>
        <IconButton
          onClick={prevPhoto}
          disabled={index === 0}
          className={styles.backArrow}
        >
          <ArrowForwardIosIcon color="secondary" />
        </IconButton>
        <IconButton
          onClick={nextPhoto}
          disabled={index === maxIndex}
          className={styles.forwardrrow}
        >
          <ArrowForwardIosIcon color="secondary" />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};
DialogGallery.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  photos: PropTypes.array,
};

export default DialogGallery;
