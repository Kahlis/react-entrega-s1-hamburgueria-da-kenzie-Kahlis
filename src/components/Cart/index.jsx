import React from "react";
import { ContentEmpty, Header } from "./style.js";
import cart from "./cart.svg";

function Cart() {
  return (
    <div>
      <Header>
        <img src={cart} alt={"Ícone carrinho"} />
        <span>Carrinho de compras</span>
      </Header>
      {/* Carrinho vazio */}
      <ContentEmpty>
        <h2>Sua sacola está vazia</h2>
        <h3>Adicione itens</h3>
      </ContentEmpty>
    </div>
  );
}

export default Cart;
