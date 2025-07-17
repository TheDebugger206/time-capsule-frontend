import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import CreateCapsule from './Pages/CreateCapsule/CreateCapsule';
import MyCapsules from './Pages/MyCapsules/MyCapsules';
import Register from './Pages/Register/Register';
import Explore from './Pages/Explore/Explore';
// import SurpriseMode from './Pages/SurpriseMode';
import './styles/App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreateCapsule />} />
        <Route path="/capsules" element={<MyCapsules />} />
        <Route path="/explore" element={<Explore />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
