import './App.css';
import Home from './pages/home/Home';
import SideBar from "./components/navbar/SideBar";
import Profile from './pages/profile/Profile';
import ForumOverview from './pages/forum/ForumOverview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from "./pages/error404/Error";

function App() {
    return (
        <Router>
            <div className="gridContainer">
                <div className="nav">
                  <SideBar />
                </div>
                <div className="mainContent">
                <Routes>
                    {/* If you want to add your page add it as the Route below and add the name of the page
                    like this path="/example", also change the element to the component you want to show */}
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/forum" element={<ForumOverview />} />
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
