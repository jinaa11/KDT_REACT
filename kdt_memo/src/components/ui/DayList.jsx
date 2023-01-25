import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function DayList() {
   const [days, setDays] = useState();
   useEffect(() => {
      fetch('http://localhost:3001/days')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setDays(data);
         }).catch(err => console.log(err));
   }, []);

   return (
      <div>
         <ul>
            {
               days && days.map(day => {
                  <Link to={ `/list/${day.day}`}>
                     <li key={day.id}>Day {day.day}</li>
                  </Link>
               })
            }
         </ul>
      </div>
   );
}

export default DayList;