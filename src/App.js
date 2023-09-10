import { useLayoutEffect } from 'react';
import './App.css';

function App() {
  const arr = ["aaa", "ddddddd", "ddddggggg"];
  const arrMap = arr.map((item) => {
    return (<li>{item}</li>)
  });

  return (
    <ul className='comments'>
      {arrMap }
    </ul>
  );
}

export default App;
