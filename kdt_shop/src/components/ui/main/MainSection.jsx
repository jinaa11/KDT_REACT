import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import style from './MainSection.module.css';

function MainSection() {
   // 상태 관리
   const [productData, setProductData] = useState([]);

   // 해당 페이지 열리자마자 데이터 불러오기
   useEffect(() => {
      // 해당 주소로 데이터 불러오기
      fetch('http://localhost:3001/products')
      // 제이슨으로 풀고
         .then(res => res.json())
         .then(data => {
            console.log(data);
            // 데이터를 setProductData로 옮기기(블럭 밖으로 나가면 데이터 값이 소멸되어 사용할 수 없음)
            setProductData(data);
         })
         .catch(err => {
            console.error(err);
         })
   }, []);

   return (
      <section className={style.mainSection}>
         {
            productData && productData.map(product => (
               <ProductCard
                  key={product.id}
                  product={product} />
            ))
         }
      </section>
   );
}

export default MainSection;