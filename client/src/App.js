import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MenuPage from './pages/Menu';
import AdministrationPage from './pages/Administration'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/menu" element={ <MenuPage />} />
        <Route path="/administration" element={ <AdministrationPage />} />
      </Routes>
    </Router>
  )
}

export default App;
