import React from 'react';
import style from './ProductCard.module.css';

function ProductCard({product}) {
   return (
      <>
         <div className={style.productCard}>
            <img src={product.thumbnail} alt="" />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
         </div>
      </>
   );
}

export default ProductCard;