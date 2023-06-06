import './App.css';
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaybeShowNavBar from "./pages/login/components/MaybeShowNavBar";

function App() {
    return (
        <Router>
            <div className="gridContainer">
                <MaybeShowNavBar>
                    <div className="nav"></div>
                </MaybeShowNavBar>
                <Routes>
                    <Route path={"/login"} element={<Login />} />
                </Routes>
                <div className="mainContent">

                </div>
            </div>
        </Router>
    );
}

export default App;