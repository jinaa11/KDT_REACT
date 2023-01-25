import React from 'react';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import FruitsPage from "./FruitsPage";
import Main from "./pages/Main";
import Day from './practice/Day';
import DayList from './practice/DayList';
// import Header from './practice/Header';
import Sample from "./Sample";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './practice/EmptyPage';


function App() {

  return (
    <>

    </>
  );

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Header />
  //       <Routes>
  //         <Route path='/' element={<DayList />} />
  //         <Route path='/day/:day' element={<Day />} />
  //         <Route path='*' element={<EmptyPage />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // );


  // const [name, setName] = useState("Jina");

  // return(
  //   <>
  //     <Sample name = {name}>Name</Sample>
  //   </>

  // );

  // const fruits = [
  //   {id: 1, name: '사과', quantity: 9, isView: 1},
  //   {id: 2, name: '바나나', quantity: 3, isView: 0},
  //   {id: 3, name: '포도', quantity: 7, isView: 1},
  //   {id: 4, name: '딸기', quantity: 1, isView: 0},
  //   {id: 5, name: '복숭아', quantity: 8, isView: 1}
  // ];

  // return (
  //   <>
  //   {
  //     fruits.map((item) => (
  //       <FruitsPage
  //         key={item.id}
  //         item={item}
  //       />
  //     ))
  //   }
  // </>
  // );

  {/* <div id="wrap">
        <Header/>
        <Main/>
        <Footer/>
      </div> */}

}

export default App;
