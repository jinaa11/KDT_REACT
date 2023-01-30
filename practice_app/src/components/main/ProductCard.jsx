import React from 'react';
import style from './ProductCard.module.css'

function ProductCard({product}) {
   return ( 
      <div className={style.productCard}>
         <img src={product.thumbnail} alt={product.description} />
         <p className={style.title}>{product.title}</p>
      </div>
    );
}

export default ProductCard;