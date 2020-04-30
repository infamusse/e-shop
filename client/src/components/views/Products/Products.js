import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Container } from "@material-ui/core";

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
  console.log("products", products);

  return (
    <div className={clsx(className, styles.root)}>
      <Container className={styles.productsContainer}>
        {active || !products.length ? (
          <h2>Loading</h2>
        ) : (
          products.map((product) => (
            <ProductCart
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

export {
  // Component as Products,
  ProductsContainer as Products,
  Products as ProductsComponent,
};
