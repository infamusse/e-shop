import React from "react";
import PropTypes from "prop-types";

import styles from "./GalleryCart.module.scss";

const GalleryCart = ({ src }) => {
  if (src) {
    return (
      <div className={styles.galleryCart}>
        <img src={src} className={styles.galleryCartPhoto} />
      </div>
    );
  } else return null;
};

GalleryCart.propTypes = {
  src: PropTypes.string,
};

export default GalleryCart;
