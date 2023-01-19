import Test from "./Test";

function App() {
  return (
    <div>
      {/* 하나의 컴포넌트 - 모듈을 가져다가 씀 */}
      <Test text = "React"/>
      <Test text ="JSX"/>
      <Test text = "안녕하세요."/>
      <Test />
      <Test />
    </div>
  );
}

export default App;
