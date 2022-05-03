import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
