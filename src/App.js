import './App.css';
import Register from './pages/signUp/Register.js';
import MaybeNavBar from './components/maybeNavBar/MaybeNavBar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="gridContainer">
        <Router>
            <MaybeNavBar>
                <div className="nav"></div>
            </MaybeNavBar>
            <Routes>
                <Route exact path={"/register"} element={<Register />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
