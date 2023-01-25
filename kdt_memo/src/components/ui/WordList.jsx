import React from 'react';
import { useState } from 'react';
import Forms from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// 상태 바뀐거 체크하고 싶음 (isCheck, setIsCheck)
function WordList({ word, isCheck, setIsCheck }) {
   const [isView, setIsView] = useState(false);

   const handleView = () => {
      setIsView(!isView);
   }

   const handleCheck = () => {
      fetch(`http://localhost:3001/words/${word.id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            // 기존 값에 더해서 바뀐 부분만 체크
            ...word,
            isDone: !word.isDone
         })
      }).then(res => {
         console.log(res);
         if (res.ok) {
            setIsCheck(!isCheck);
         }
      })
   }

   return (
      <tr key={word.id}>
         <td>{word.id}</td>
         <td>
            <Forms.Check
               type="checkbox"
               defaultChecked={word.isDone}
               disabled={word.isDone}
               onChange={handleCheck}
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