import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { Container, Grid, Paper } from "@mui/material";
// import {Grid, Container} from ""
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
// import CartPage from "./CartPage";
function App() {
  const [products, setProducts] = useState([
    {
      name: "Cool 3D Running Shoes",
      description:
        "Experience next-level comfort and style with these cutting-edge 3D shoes.",
      rating: 4.7,
      price: 89.99,
      image: "/coolRunningShoe.jpeg",
      inCart: false,
    },
    {
      name: "Fashionable High-Top Sneakers",
      description:
        "Elevate your style with these trendy high-top sneakers, perfect for any occasion.",
      rating: 4.3,
      price: 79.99,
      image: "FashionableHigh-TopSneakers.webp",
      inCart: false,
    },
    {
      name: "Classic Leather Loafers",
      description:
        "Timeless and versatile, these leather loafers offer both elegance and comfort.",
      rating: 4.5,
      price: 99.99,
      image: "ClassicLeatherLoafers.jpeg",
      inCart: false,
    },
    {
      name: "Outdoor Hiking Boots",
      description:
        "Conquer the great outdoors with these rugged and durable hiking boots.",
      rating: 4.6,
      price: 119.99,
      image: "OutdoorHikingBoots.jpeg",
      inCart: false,
    },
    {
      name: "Casual Slip-On Sandals",
      description:
        "Stay relaxed and stylish in these comfy slip-on sandals for your daily adventures.",
      rating: 4.2,
      price: 49.99,
      image: "CasualSlip-OnSandals.jpeg",
      inCart: false,
    },
    {
      name: "Athletic Training Shoes",
      description:
        "Achieve your fitness goals with these top-quality athletic training shoes.",
      rating: 4.8,
      price: 69.99,
      image: "AthleticTrainingShoes.jpeg",
      inCart: false,
    },
    {
      name: "Chic Oxford Dress Shoes",
      description:
        "Impress at any formal event with these elegant oxford dress shoes.",
      rating: 4.4,
      price: 109.99,
      image: "ChicOxfordDressShoes.jpeg",
      inCart: false,
    },
    {
      name: "Stylish Canvas Sneakers",
      description:
        "Express your unique style with these fashionable canvas sneakers.",
      rating: 4.0,
      price: 59.99,
      image: "StylishCanvasSneakers.jpeg",
      inCart: false,
    },
    {
      name: "Versatile Ankle Boots",
      description:
        "Transition effortlessly between seasons with these versatile ankle boots.",
      rating: 4.5,
      price: 89.99,
      image: "VersatileAnkleBoots.jpeg",
      inCart: false,
    },
    {
      name: "Sleek Leather Derby Shoes",
      description:
        "Upgrade your formal wardrobe with these sleek leather derby shoes.",
      rating: 4.6,
      price: 119.99,
      image: "SleekLeatherDerbyShoes.jpeg",
      inCart: false,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.name === product.name) {
        p.inCart = true;
      }
      return p;
    });

    setProducts(updatedProducts);
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    const updatedProducts = products.map((p) => {
      if (p.name === product.name) {
        p.inCart = false;
      }
      return p;
    });

    setCart(updatedCart);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
