import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <Grid container spacing={2} padding={2}>
      {cart.map((product, index) => (
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
              {/* <Rating value={product.rating} readOnly /> */}
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                // disabled={product.inCart}
                onClick={() => removeFromCart(product)}
              >
                remove cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
