import React from 'react';
import InnerTest from './InnerTest';

function Test({text}) {
  return (  
    <div>
      <h1>{text} 여기에 값이 표현됩니다.</h1>
      <InnerTest innerTxt = {text}/>
    </div>
  );
}

export default Test;