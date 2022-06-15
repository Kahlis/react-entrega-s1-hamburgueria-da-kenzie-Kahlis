import React from "react";
import { ProductItem, ProductInfo } from "./style";

function Product({ name, type, price, image }) {
  return (
    <ProductItem>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <ProductInfo>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <span>R$ {price.toFixed(2).toString().replace(".", ",")}</span>
        <button>Adicionar</button>
      </ProductInfo>
    </ProductItem>
  );
}

export default Product;
