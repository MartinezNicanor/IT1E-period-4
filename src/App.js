import './App.css';
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaybeShowNavBar from "./pages/login/components/MaybeShowNavBar";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SideBar from "./components/navbar/SideBar";
import ForumOverview from './pages/forum/ForumOverview';

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
                        {/* If you want to add your page add it as the Route below and add the name of the page
                        like this path="/example", also change the element to the component you want to show */}
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/"} element={<Profile />} />
                        <Route path="/forum" element={<ForumOverview />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;