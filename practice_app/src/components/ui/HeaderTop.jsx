import React from 'react';
import { gnbMenu } from '../../data/gnbMenu';
import style from './HeaderTop.module.css'

function HeaderTop() {
   return (
      <div className={style.headerTopWrap}>
         <img className={style.logo} src = "https://www.starbucks.co.kr/common/img/common/logo.png" alt="logo"></img>
         <nav className={style.gnb}>
            <ul>
               {
                  gnbMenu.map(menu => (
                     <li key={menu.id}>{menu.name}</li>
                  ))
               }
            </ul>
         </nav>
      </div>
   );
}

export default HeaderTop;