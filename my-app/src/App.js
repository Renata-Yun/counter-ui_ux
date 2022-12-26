import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='number'> {count} </h1>
        <div className="buttons">
          <button className="btn1" onClick={() => setCount(count-1)}>-</button>
          <button className="btn2" onClick={() => setCount(count+1)}>+</button>
        </div>
        <p>
          Ща как посчитаю!
        </p>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
