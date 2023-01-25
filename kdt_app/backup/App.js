import {useState} from "react";
import Test from "./Test";

function App() {
  // useState(초기값); => 상태 변화
const [number, setNumber] = useState(0);

const Increment =() => {
  setNumber(number + 1);
  console.log(number);
};

const Decrement = () => {
  setNumber(number - 1);
  console.log(number);
};

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <Test text = {number}/>
    </div>
  );
}

export default App;
