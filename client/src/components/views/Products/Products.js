import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Container, LinearProgress } from "@material-ui/core";

import { connect } from "react-redux";
import { getAllProducts, getLoadingState } from "../../../redux/productsRedux";

import styles from "./Products.module.scss";

import ProductCart from "../../features/ProcuctCart/ProductCart";

const Products = ({
  className,
  children,
  products,
  loading: { active, error },
}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Container className={styles.productsContainer}>
        {active || !products.length ? (
          <LinearProgress />
        ) : (
          products.map((product) => (
            <ProductCart
              title={product.title}
              className={styles.productsProductCart}
              key={product._id}
              product={product}
            />
          ))
        )}
      </Container>
      {children}
    </div>
  );
};

Products.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loading: getLoadingState(state),
});

const ProductsContainer = connect(mapStateToProps, null)(Products);

export { ProductsContainer as Products, Products as ProductsComponent };
