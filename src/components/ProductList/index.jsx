import React from "react";
import Product from "./Product";
import { ProductsContainer } from "./style.js";

function ProductList({ products }) {
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
