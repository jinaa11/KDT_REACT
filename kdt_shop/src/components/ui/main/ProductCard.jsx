import React from 'react';
import style from './ProductCard.module.css';
import { Link, useNavigate } from 'react-router-dom';

function ProductCard({ product }) {

   const userId = 1;
   const navigate = useNavigate();


   const handleAddCart = () => {
      // 해당 주소로 데이터 보내기
      fetch('http://localhost:3001/carts', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            productId: product.id,
            // 일단은 고정 값
            userId: userId,
            // 일단은 고정 값
            qty: 1
         })
      })
         .then(res => {
            res.json();
            if (res.ok) {
               window.alert('Added to cart');
               navigate('/cart')
            }
         })
         .catch(err => console.error(err));
   }

   return (
      <>
         <div className={style.productCard}>
            {/* '동적 구성'을 위한 링크 사용, product.id로 찾아감 */}
            <Link to={`/product-detail/${product.id}`} >
               {/* alt는 상품 설명문 */}
               <img src={product.thumbnail} alt={product.description} />
            </Link>
            <p className={style.title}>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price} $</p>

            <div
               //   버튼을 누르면 카트에 저장
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