import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Main />} />
            <Route path="/skills" element={<Main />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
