import React from "react";
import PropTypes from "prop-types";

import styles from "./GalleryCart.module.scss";

const GalleryCart = ({ src, title, dialogGallery }) => {
  const handleOpenDialogGallery = () => {
    dialogGallery(true);
  };

  if (src) {
    return (
      <div onClick={handleOpenDialogGallery} className={styles.galleryCart}>
        <img src={src} alt={title} className={styles.galleryCartPhoto} />
      </div>
    );
  } else return null;
};

GalleryCart.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default GalleryCart;
