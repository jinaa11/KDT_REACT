import React, { useState, useEffect, useContext } from 'react';
import CartListCard from '../ui/cart/CartListCard';
import style from './Cart.module.css';

function Cart() {
  const userId = 1;
  const [cartDatas, sertCartDatas] = useState([]);
  const [delCheck, setDelCheck] = useState(false);

  useEffect(() => {
    console.log(delCheck);
    // 해당 유저의 상품 모두 불러오기(제이슨 서버는 id값 자동 증가시켜줌)
    fetch(`http://localhost:3001/carts?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        sertCartDatas(data)
      });
  }, [userId, delCheck]);

  return (
    <div className={style.cartListWrap}>
      {
        cartDatas && cartDatas.map(cartData => (
          <CartListCard
            key={cartData.id}
            cartData={cartData}
            delCheck={delCheck}
            setDelCheck={setDelCheck}
          />
        ))
      }
    </div>
  );
}

export default Cart;