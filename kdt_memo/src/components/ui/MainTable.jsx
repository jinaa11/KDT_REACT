import Table from 'react-bootstrap/Table';
import Forms from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import data from '../../db/data.json'


function MainTable() {
  console.log(data);

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
            <tr key={word.id}>
              <td>{word.id}</td>
              <td>
                <Forms.Check type="checkbox" />
              </td>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
              <td>
                <Button variant="primary">답 보기</Button>{' '}
                <Button variant="secondary">삭제</Button>{' '}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default MainTable;