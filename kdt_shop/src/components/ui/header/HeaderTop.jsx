import React from 'react';
import style from './HeaderTop.module.css'

function HeaderTop() {
   return (
      <div className={style.headerTopWrap}>
         <h1 className={style.logo}>SSG.COM</h1>
         <div className={style.search}>
            <input type="text"/>
         </div>
         <div className='cartIon'>
            장
         </div>
      </div>
   );
}

export default HeaderTop;