import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/layout/Header';
import Main from './components/pages/Main';
import Footer from './components/layout/Footer';
import ProductDetail from './components/layout/ProductDetail';
function App() {
  return (
    <div className='appWrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
