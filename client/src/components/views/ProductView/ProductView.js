import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Container, LinearProgress, Grid } from "@material-ui/core";

import { connect } from "react-redux";
import {
  fetchOneProductFromAPI,
  getLoadingState,
  getOneProducts,
} from "../../../redux/productsRedux";

import styles from "./ProductView.module.scss";

const ProductView = ({
  fetchProduct,
  product,
  match: { params },
  loading: { active, error },
}) => {
  useEffect(() => {
    fetchProduct(params.id);
  }, []);

  if (active || !product) return <LinearProgress className={styles.progress} />;
  else
    return (
      <Container className={styles.productContainer}>
        <Grid className={styles.productMainRow} container>
          <Grid item xs={12} md={8}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <h2 className={styles.productAuhtor}>{product.author}</h2>
            <Grid className={styles.productAddInfoRow} container spacing={3}>
              <Grid item>
                <p>
                  <b>
                    <i>Price: </i>
                  </b>
                  {product.price}$
                </p>
              </Grid>
              <Grid item>
                <p>
                  <b>
                    <i>Cover: </i>
                  </b>
                  {product.cover}
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles.productMainPhotoRow} item xs={12} md={4}>
            <div className={styles.productMainPhoto}>
              <img src={product.mainPhoto} alt={product.title} />
            </div>
          </Grid>
        </Grid>
      </Container>
    );
};

ProductView.propTypes = {
  product: PropTypes.object,
  fetchProduct: PropTypes.func,
};

const mapStateToProps = (state) => ({
  product: getOneProducts(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = { fetchProduct: (id) => fetchOneProductFromAPI(id) };

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductView);

export { ProductContainer as ProductView };
