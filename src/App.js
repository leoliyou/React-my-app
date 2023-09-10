import { useLayoutEffect } from 'react';
import './App.css';

function App() {
  return (
    <ul>
      <li>
        <a
          href="http://www.baidu.com"
          class="comments">
          第一
        </a>
      </li>

      <li class="comments">
        <a href="http://www.baidu.com">第二</a>
      </li>

      <li class="comments">
        <a href="http://www.baidu.com">第三</a>
      </li>
    </ul>
  );
}

export default App;
