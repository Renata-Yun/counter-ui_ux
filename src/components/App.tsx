import { Routes, Route, Link } from "react-router-dom"
import "./App.css";

import Counter1 from './Counter1';
import Counter2 from './Counter2';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <menu>
        <Link to="/s1">Первый счётчик</Link> |
        <Link to="/s2">Второй счётчик</Link> |
        <Link to="/s404">404 тест</Link>
      </menu>
        <Routes>
          <Route path="/s1" element={<Counter1/>} />
          <Route path="/s2" element={<Counter2/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </header>
    </div>
  );
}

export default App;
