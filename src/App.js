import './App.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import SideBar from "./components/navbar/SideBar";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
                </Routes>
                </div>
                <Footer />
            </div>
        </Router>
      );
}

export default App;
