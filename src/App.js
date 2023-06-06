import './App.css';
import Register from './pages/signUp/Register.js';
import MaybeShowNavBar from './components/maybeNavBar/MaybeNavBar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="gridContainer">
            <MaybeShowNavBar>
                <div className="nav"></div>
            </MaybeShowNavBar>
            <Routes>
                <Route path={"/register"} element={<Register />} />
            </Routes>
            <div className={"mainContent"}>

            </div>
        </div>
    </Router>
  );
}

export default App;
