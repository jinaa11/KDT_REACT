import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Main from './components/pages/Main';
import ProductDetail from './components/pages/ProductDetail';
import ProductList from './components/pages/ProductList';
import Wish from './components/pages/Wish';
import {QtyContext} from './components/context/QtyContext'
import './App.css';
import { useState } from 'react';

function App() {
  const [cartQty, setCartQty] = useState(0);

  return (
    <QtyContext.Provider value={{cartQty, setCartQty}}>
      <div className='appWrap'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wish' element={<Wish />} />
            <Route path='/product' element={<ProductList />} />
            <Route path='/product-detail/:id' element={<ProductDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </QtyContext.Provider>
  );
}

export default App;
