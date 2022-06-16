import React from "react";

function CartTotal() {
  return (
    <>
      <div className="row">
        <p>Total</p>
        <span className="price">R$ 40,00</span>
      </div>
      <button>REMOVER TODOS</button>
    </>
  );
}

export default CartTotal;
