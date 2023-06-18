import Login from "./pages/login/Login";
import Register from './pages/register/Register.js';
import MaybeNavBar from './components/maybeNavBar/MaybeNavBar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Question from './pages/forum/Question';
import SideBar from "./components/navbar/SideBar";
import ForumOverview from './pages/forum/ForumOverview';

function App() {
  return (
    <Router>
        <div className="gridContainer">
            <MaybeNavBar>
                <SideBar />
            </MaybeNavBar>
            <Routes>
                <Route path={"/register"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path="/forum" element={<ForumOverview />} />
                <Route path="/question/:id" element={<Question />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;