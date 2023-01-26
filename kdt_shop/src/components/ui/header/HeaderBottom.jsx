import React from 'react';
import style from './HeaderBottom.module.css'
import { gnbMenu } from '../../../data/gnbMenu';
import { Link, useLocation } from 'react-router-dom';

function HeaderBottom() {
   // 현재 URL 정보 가져오기
   const location = useLocation();

   return (
      <nav className={style.gnb}>
         <ul>
            {
               gnbMenu.map(menu => (
                  // 클래스네임은 같은 주소 판단하기 위해 useLocation()으로 pathname 부르기
                  <li key={menu.id} className={menu.link === location.pathname ? `${style.active}` : ''}>
                     <Link to ={menu.link}>{menu.name}</Link></li>
               ))
            }
         </ul>
      </nav>
   );
}

export default HeaderBottom;