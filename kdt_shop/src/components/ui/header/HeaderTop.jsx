import React from 'react';
import style from './HeaderTop.module.css'

function HeaderTop() {
   return (
      <div className={style.headerTopWrap}>
         <h1 className={style.logo}>SSG.COM</h1>
         <div className='search'>
            <input type="text" placeholder='Search' />
         </div>
         <div className='cartIon'>
            장바구니 아이콘
         </div>
      </div>
   );
}

export default HeaderTop;