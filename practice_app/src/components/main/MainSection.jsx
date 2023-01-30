import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function MainSection() {
   const [productData, setProductData] = useState([]);
   console.log(productData);

   useEffect(() => {
      fetch('http://localhost:3001/products')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setProductData(data);
         })
         .catch(err => {
            console.error(err);
         })
   }, []);

   return (
      <section className='mainSection'>
         {
            productData && productData.map(product => (
               <ProductCard 
                  key={product.id}
                  product={product}
               />
            ))
         }

      </section>
   );
}

export default MainSection;