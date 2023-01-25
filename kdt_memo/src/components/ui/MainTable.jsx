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
        <tr>
          <td>1</td>
          <td>
            <Forms.Check type="checkbox" />
          </td>
          <td>apple</td>
          <td>사과</td>
          <td>
            <Button variant="primary">답 보기</Button>{' '}
            <Button variant="secondary">삭제</Button>{' '}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MainTable;