import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css'

function ProductCard({ product }) {
   return (
      <div className={style.productCard}>
         <Link to={`product-detail/${product.id}`}>
            <img src={product.thumbnail} alt={product.description} />
         </Link>
         <p className={style.title}>{product.title}</p>
      </div>
   );
}

export default ProductCard;