import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
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
