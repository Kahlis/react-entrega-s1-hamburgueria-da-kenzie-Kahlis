import React from "react";
import { ContentEmpty, ContentFilled, Header, StyledDiv } from "./style.js";
import cart from "./cart.svg";
import CartProduct from "./CartProduct/index.jsx";
import product1 from "../../images/product1.png";
import CartTotal from "./CartTotal/index.jsx";

function Cart() {
  return (
    <StyledDiv>
      <Header>
        <img src={cart} alt={"Ícone carrinho"} />
        <span>Carrinho de compras</span>
      </Header>
      {/* Carrinho vazio 
      <ContentEmpty>
        <h2>Sua sacola está vazia</h2>
        <h3>Adicione itens</h3>
      </ContentEmpty> 
      */}
      <ContentFilled>
        <CartProduct
          name={"Hamburguer"}
          category={"Sanduíche"}
          image={product1}
          price={14}
        />
        <CartProduct
          name={"Hamburguer"}
          category={"Sanduíche"}
          image={product1}
          price={14}
        />
        <CartProduct
          name={"Hamburguer"}
          category={"Sanduíche"}
          image={product1}
          price={14}
        />
        <CartProduct
          name={"Hamburguer"}
          category={"Sanduíche"}
          image={product1}
          price={14}
        />
        <hr />
        <CartTotal />
      </ContentFilled>
    </StyledDiv>
  );
}

export default Cart;
