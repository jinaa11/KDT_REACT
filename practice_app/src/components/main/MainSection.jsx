import React, { useState } from 'react';
import ProductCard from './ProductCard';

function MainSection() {
   const [productData, setProductData] = useState([]);

   return ( 
      <section className='mainSection'>
         <ProductCard />
      </section>
    );
}

export default MainSection;