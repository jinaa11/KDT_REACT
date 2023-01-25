import Table from 'react-bootstrap/Table';
import data from '../../db/data.json'
import WordList from './WordList';


function MainTable() {
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