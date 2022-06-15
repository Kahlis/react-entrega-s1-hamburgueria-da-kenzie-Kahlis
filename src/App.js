import './App.css';
import Header from './components/Header';
import GlobalStyle from './style/global';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductList />
      <Cart />
    </>
  );
}

export default App;
