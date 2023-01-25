import React from 'react';
import { useState } from 'react';
import Forms from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function WordList({ word }) {
   const [isView, setIsView] = useState(false);

   const handleView = () => {
      setIsView(!isView);
   }

   return (
      <tr key={word.id}>
         <td>{word.id}</td>
         <td>
            <Forms.Check type="checkbox"
               disabled={word.isDone}
               defaultChecked={word.isDone}
            />
         </td>
         <td>{word.eng}</td>
         <td>{isView ? word.kor : ""}</td>
         <td>
            <Button variant="primary" onClick={handleView}>뜻 {isView ? "감추기" : "보기"}</Button>{' '}
            <Button variant="secondary">삭제</Button>
         </td>
      </tr>
   );
}

export default WordList;