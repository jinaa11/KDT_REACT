import React, { useState, useEffect, useContext } from 'react';
import { QtyContext } from '../../context/QtyContext';
import style from './CartListCard.module.css'

function CartListCard({ cartData, delCheck, setDelCheck }) {
  const contextData = useContext(QtyContext);
  const [cartObj, setCartObj] = useState(
    {
      id: cartData.id,
      userId: cartData.userId,
      productId: cartData.productId,
      productImg: "",
      productName: "",
      productPrice: 0,
      qty: cartData.qty,
    }
  )

  const url = `http://localhost:3001/products/${cartObj.productId}`;

  // 호출된 값 각각 적용
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCartObj({
          // 기존 값은 그대로 불러오기
          ...cartObj,
          // 추가로 필요한 정보는 products에서 뽑아오기
          productImg: data.thumbnail,
          productName: data.title,
          productPrice: data.price
        })
      })
  }, [url])


  const handleQtyPatch = (qty) => {
    fetch(`http://localhost:3001/carts/${cartObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        qty: qty
      })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  const handleQtyIncre = () => {
    // state
    setCartObj({
      ...cartObj,
      qty: cartObj.qty + 1
    })
    // database
    handleQtyPatch(cartObj.qty + 1);

  }

  const handleQtyDecre = () => {
    // state
    if (cartObj.qty === 1) {
      return alert("최소 수량은 1개 입니다.");
    }
    setCartObj({
      ...cartObj,
      qty: cartObj.qty - 1
    })
    // database
    handleQtyPatch(cartObj.qty - 1);
  }

  const handleDelete = () => {
    fetch(`http://localhost:3001/carts/${cartObj.id}`, {
      method: "DELETE",
    }).then(res => {
      console.log(res);
      res.ok ? setDelCheck(!delCheck) : alert("삭제 실패")
    }).then(contextData.setCartQty(contextData.cartQty - 1))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className={style.cartListCard}>
        <img src={cartObj.productImg} alt={cartObj.productName} />
        <div className={style.info}>
          <h3>{cartObj.productName}</h3>
          <p>price : {cartObj.productPrice}</p>
          <div className={style.qtyHandler}>
            <button onClick={handleQtyDecre}>-</button>
            <p>{cartObj.qty}</p>
            <button onClick={handleQtyIncre}>+</button>
          </div>
          <p>total price : {cartObj.productPrice * cartObj.qty} $</p>
        </div>
        <div>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartListCard;