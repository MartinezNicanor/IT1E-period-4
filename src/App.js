import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import AssignmentsTopics from './pages/assignments/assignmentsTopics/AssignmentsTopics';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="gridContainer">
            <div className="nav"></div> {/* Replace this div with the nav component */}
            <div className="mainContent">
                <Routes>
                    {/* If you want to add your page add it as the Route below and add the name of the page
                        like this path="/example", also change the element to the component you want to show */}
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/assignments" element={<AssignmentsTopics />} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
