import './App.css';
import Home from './pages/home/Home';
import SideBar from "./components/navbar/SideBar";
import Profile from './pages/profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GenerateTestPage from "./pages/testGenerate/generateTest";

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
                    <Route path="/generateTest" element={<GenerateTestPage />} />
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
