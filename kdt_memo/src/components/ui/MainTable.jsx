import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
// import data from '../../db/data.json'
import WordList from './WordList';


function MainTable() {
  const [data, setData] = useState();
  
  useEffect(()=> {
    fetch('http://localhost:3001/words')
    // 제이슨으로 풀어내고
    .then(res=>res.json())
    // data에 옮겨 담음
    .then(data=>setData(data))
    .catch(err=>console.log(err));
  }, []);

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
          data.words.map(word => (
            <WordList key={word.id} word={word} />
          ))
        }
      </tbody>
    </Table>
  );
}

export default MainTable;