import React from 'react';
import MainTable from '../ui/MainTable';
import { useParams } from 'react-router-dom';

function WordPage() {
   const {dayId} = useParams();
   return (  
      <div className='container mt-5'>
         <h1>Day : {dayId}</h1>
         <MainTable dayId={dayId}/>
      </div>
   );
}

export default WordPage;