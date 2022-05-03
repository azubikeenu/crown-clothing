import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component';

const Hats = (props) => {
  return (
    <div>
      <h1>{`Hats Page`.toUpperCase()}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<Hats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
