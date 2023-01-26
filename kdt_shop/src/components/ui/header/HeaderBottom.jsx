import React from 'react';
import style from './HeaderBottom.module.css'
import { gnbMenu } from '../../../data/gnbMenu';
import { Link } from 'react-router-dom';

function HeaderBottom() {
   return (
      <nav className={style.gnb}>
         <ul>
            {
               gnbMenu.map(menu => (
                  <li key={menu.id}><Link to ={menu.link}>{menu.name}</Link></li>
               ))
            }
         </ul>
      </nav>
   );
}

export default HeaderBottom;