import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ProductDetail.module.css'

function ProductDetail() {
   const [product, setProduct] = useState('a');
   const {productId} = useParams();
   console.log(productId);
   useEffect(() => {
      fetch(`http://localhost:3001/products/${productId}`)
      .then(res => res.json())
      .then(data => {
         console.log(data);
         setProduct(data);
      })
      .catch(err => console.error(err))
   }, []);

   return (
      <div className={style.productDetail}>
         {
            product && (
               <>
                  <h2>{product.title}</h2>
                  <hr />
                  <p>{product.description}</p>
                  <img src={product.thumbnail} alt={product.description} />
                  <p>제품 영양 정보</p>
                  <hr />
                  <div>
                     <ul>
                        <li>1회 제공량 (kcal)</li>
                        <li>포화지방 (g)</li>
                        <li>단백질 (g)</li>
                        <li>나트륨 (mg)</li>
                        <li>당류 (g)</li>
                        <li>카페인 (mg)</li>
                     </ul>
                     <ul>
                        <li>{product.amount}</li>
                        <li>{product.fat}</li>
                        <li>{product.protein}</li>
                        <li>{product.na}</li>
                        <li>{product.sugar}</li>
                        <li>{product.caffeine}</li>
                     </ul>
                  </div>
               </>
            )
         }
      </div>
   );
}

export default ProductDetail;