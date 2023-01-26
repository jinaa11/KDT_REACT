import React, { useState} from 'react';
import style from './HeaderTop.module.css'
// import Lottie from 'react-lottie';
import * as animationData from '../../lottie/Cart.json'
import { Link } from 'react-router-dom';

function HeaderTop() {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice'
      }
   };

   const [searchWord, setSearchWord] = useState('test');

   const handleSubmit = (e) => {
      e.preventDefault();
      if(e.key === 'Enter') {
         console.log('Enter key pressed');
      }
   }

   // searchWord 값 변경
   const handleChange = (e) => {
      console.log(e.target.value);
      setSearchWord(e.target.value);
   }

   const handleKeyDown = () => {

   }

   return (
      <div className={style.headerTopWrap}>
         <h1 className={style.logo}><Link to={'/'}>SSG.COM</Link></h1>
         <div className={style.search} onSubmit={handleSubmit}>
            <input type="text"
               onChange={handleSubmit}
               onKeyDown={handleKeyDown}
               defaultValue={searchWord}
            />
         </div>
         <div className={style.cartIon} >
            <Link to='/cart'>
               {/* <Lottie options={defaultOptions}
              height={60}
              width={60} /> */}
               장
            </Link>
         </div>
      </div>
   );
}

export default HeaderTop;