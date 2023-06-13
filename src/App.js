import './App.css';
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaybeShowNavBar from "./pages/login/components/MaybeShowNavBar";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SideBar from "./components/navbar/SideBar";

function App() {
    return (
        <Router>
            <div className="gridContainer">
                <MaybeShowNavBar>
                  <div className="nav">
                    <SideBar />
                  </div>
                </MaybeShowNavBar>
                <Routes>
                    <Route path={"/login"} element={<Login />} />
                </Routes>
                <div className="mainContent">
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/"} element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;