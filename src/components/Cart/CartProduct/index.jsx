import React from "react";
import { StyledLi } from "./style";

function CartProduct({ name, category, image, price }) {
  return (
    <StyledLi>
      <figure>
        <img src={image} alt={`Foto do ${name}`} />
      </figure>
      <div>
        <h2>{name}</h2>
        <h3>{category}</h3>
      </div>
      <span
        onClick={() => {
          console.log("Ok");
        }}
      >
        Remover
      </span>
    </StyledLi>
  );
}

export default CartProduct;
