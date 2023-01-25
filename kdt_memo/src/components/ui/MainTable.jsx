import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
// import data from '../../db/data.json'
import WordList from './WordList';


function MainTable() {
  // State 추가
  const [data, setData] = useState();
  const [isCheck, setIsCheck] = useState(false);

  // 실행되면 데이터 호출, isCheck가 바뀌면 호출
  useEffect(() => {
    fetch('http://localhost:3001/words')
      // 제이슨으로 풀어내고
      .then(res => res.json())
      // data에 옮겨 담음
      .then(data => {
        console.log(data);
        setData(data)
      })
      .catch(err => console.log(err));
  }, [isCheck]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Check</th>
          <th>English</th>
          <th>Korean</th>
          <th>Controller</th>
        </tr>
      </thead>
      <tbody>
        {
          // 데이터가 있으면 실행하고
          // WordList로 props 전달
          // 없으면 동작 X
          data && data.map(word => (
            <WordList key={word.id}
              word={word}
              isCheck={isCheck}
              setIsCheck={setIsCheck} />
          ))
        }
      </tbody>
    </Table>
  );
}

export default MainTable;