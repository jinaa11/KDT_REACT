import React, { useState, useEffect } from 'react';

function Cart() {
  const userId = 1;
  const [cartDatas, sertCartDatas] = useState();

  useEffect(() => {
    // 해당 유저의 상품 모두 불러오기(제이슨 서버는 id값 자동 증가시켜줌)
    fetch(`http://localhost:3001/carts?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  });

  return (
    <>

    </>
  );
}

export default Cart;