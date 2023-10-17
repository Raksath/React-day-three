import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Rating,
  Grid,
} from "@mui/material";

const ProductList = ({ products, addToCart }) => {
  return (
    <Grid container spacing={2} padding={2}>
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Include the image element with a src attribute */}
                <img
                  src={product.image} // Use the image property from your product data
                  alt={product.name} // Provide an alt attribute for accessibility
                  style={{
                    width: "auto",
                    height: "200px",
                    alignSelf: "center",
                  }} // Adjust image size as needed
                />
              </div>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Rating value={product.rating} readOnly />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                disabled={product.inCart}
                onClick={() => addToCart(product)}
              >
                {product.inCart ? "In Cart" : "Add to Cart"}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
