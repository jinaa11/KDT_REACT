import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css';

function ProductCard({ product }) {
   const userId = 1;

   const handleAddCart = () => {
      fetch('https://dummyjson.com/carts/add', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            userId: userId,
            products: [
               {
                  id: product.id,
                  quantity: 1,
               }
            ]
         })
      })
         .then(res => {
            res.json()
            if (res.ok) {
               window.alert('장바구니에 추가 되었습니다.')
            }
         })
         .catch(err => console.log(err));
   }

   return (
      <>
         <div className={style.productCard}>
            <Link to={`/product-detail/${product.id}`}>
               <img src={product.thumbnail} alt={product.description} />
               <p>{product.title}</p>
               <p>{product.description}</p>
               <p>{product.price}</p>
            </Link>
            <div
               onClick={handleAddCart}
               className={style.cartBtn}
            >
               ADD CART
            </div>
         </div>
      </>
   );
}

export default ProductCard;