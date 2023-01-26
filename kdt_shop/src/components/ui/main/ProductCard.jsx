import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css';

function ProductCard({ product }) {
   return (
      <>
         <div className={style.productCard}>
            <Link to={`/product-detail/${product.id}`}>
               <img src={product.thumbnail} alt={product.description} />
               <p>{product.title}</p>
               <p>{product.description}</p>
               <p>{product.price}</p>
            </Link>

            <div className={style.cartBtn}> ADD CART</div>
         </div>
      </>
   );
}

export default ProductCard;