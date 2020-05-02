import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./ProductCart.module.scss";

const ProductCart = ({ product }) => {
  const { _id, title, author, mainPhoto } = product;
  return (
    <Link to={`${process.env.PUBLIC_URL}/product/${_id}`}>
      <div className={styles.productCart}>
        <img src={mainPhoto} alt={title} className={styles.productCartPhoto} />
        <div className={styles.productCartTextWrapper}>
          <h2 className={styles.productCartTitle}>{title}</h2>
          <h3 className={styles.productCartAuthor}>{author}</h3>
        </div>
      </div>
    </Link>
  );
};

ProductCart.propTypes = {
  product: PropTypes.object,
};

export default ProductCart;
