import React from 'react';
import { useParams } from 'react-router-dom';
import dummy from '../db/data.json';
import Word from './Word';

function Day() {
   // dummy.words
   const { day } = useParams();
   const wordList = dummy.words.filter(word => word.day === Number(day));
   return (
      <>
         <h2>Day {day}</h2>
         <table>
            {wordList.map(word => (
               <Word word={word} key={word.id}/>
            ))}

         </table>
      </>
   );
}

export default Day;