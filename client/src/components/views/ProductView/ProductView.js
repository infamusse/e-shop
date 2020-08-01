import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Container, LinearProgress, Grid } from "@material-ui/core";

import { connect } from "react-redux";
import {
  fetchOneProductFromAPI,
  getLoadingState,
  getOneProducts,
} from "../../../redux/productsRedux";

import GalleryCart from "../../features/GalleryCart/GalleryCart";
import { AddToCard } from "../../common/AddToCard/AddToCard";
import DialogGallery from "../../features/DialogGallery/DialogGallery";

import styles from "./ProductView.module.scss";

const ProductView = ({
  fetchProduct,
  product,
  match: { params },
  loading: { active, error },
}) => {
  const [dialogGallery, openDialogGallery] = useState(false);

  const handleCloseDialogGallery = () => openDialogGallery(false);

  useEffect(() => {
    fetchProduct(params.id);
  }, [fetchProduct, params]);

  if (active || !product) return <LinearProgress className={styles.progress} />;
  else
    return (
      <Container className={styles.productContainer}>
        <Grid className={styles.productMainRow} container>
          <Grid item xs={12} md={6}>
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
            </Grid>
            {product.morePhoto && (
              <Grid className={styles.productGalleryCarts}>
                {product.morePhoto.map((photo, index) => (
                  <GalleryCart
                    key={index}
                    dialogGallery={openDialogGallery}
                    title={product.title}
                    src={photo}
                  />
                ))}
                <DialogGallery
                  open={dialogGallery}
                  handleClose={handleCloseDialogGallery}
                  photos={[...product.morePhoto, product.mainPhoto]}
                />
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={2}>
            <AddToCard product={product} />
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
