import './App.css';
import Register from './pages/signUp/Register.js';
import MaybeShowNavBar from './components/maybeNavBar/MaybeNavBar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import SideBar from "./components/navbar/SideBar";
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Router>
        <div className="gridContainer">
            <MaybeShowNavBar>
                <div className="nav">
                  <Sidebar />
                </div>
            </MaybeShowNavBar>
            <Routes>
                <Route path={"/register"} element={<Register />} />
            </Routes>
            <div className="mainContent">
                <Routes>
                    {/* If you want to add your page add it as the Route below and add the name of the page
                    like this path="/example", also change the element to the component you want to show */}
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;