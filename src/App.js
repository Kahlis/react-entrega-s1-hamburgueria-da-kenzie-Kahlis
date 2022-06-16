import './App.css';
import Header from './components/Header';
import GlobalStyle from './style/global';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

import product1 from './images/product1.png'
import product2 from './images/product2.png'
import product3 from './images/product3.png'
import product4 from './images/product4.png'
import product5 from './images/product5.png'
import product6 from './images/product6.png'

function App() {
  const [products] = useState([
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
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)



  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductList products={products} setCartTotal={setCartTotal} cartTotal={cartTotal} />
      <Cart cartTotal={cartTotal} />
    </>
  );
}

export default App;
