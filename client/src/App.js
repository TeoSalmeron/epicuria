import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MenuPage from './pages/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/menu" element={ <MenuPage />} />
      </Routes>
    </Router>
  )
}

export default App;
