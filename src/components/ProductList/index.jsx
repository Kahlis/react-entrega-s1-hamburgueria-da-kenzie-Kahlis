import React from "react";
import Product from "./Product";
import { ProductsContainer } from "./style.js";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
import product5 from "../../images/product5.png";
import product6 from "../../images/product6.png";

function ProductList() {
  const products = [
    {
      name: "Hamburguer",
      type: "Sanduíche",
      price: 14,
      image: product1,
    },
    {
      name: "X-Burgue",
      type: "Sanduíche",
      price: 16,
      image: product2,
    },
    {
      name: "Big Kenzie",
      type: "Sanduíche",
      price: 18,
      image: product3,
    },
    {
      name: "Fanta Guaraná",
      type: "Bebidas",
      price: 5,
      image: product4,
    },
    {
      name: "Coca Cola",
      type: "Bebidas",
      price: 7,
      image: product5,
    },
    {
      name: "McShake Ovomaltine",
      type: "Sanduíche",
      price: 10,
      image: product6,
    },
  ];

  return (
    <ProductsContainer>
      {products.map((product, index) => {
        return (
          <Product
            name={product.name}
            type={product.type}
            price={product.price}
            image={product.image}
            key={index}
          />
        );
      })}
    </ProductsContainer>
  );
}

export default ProductList;
