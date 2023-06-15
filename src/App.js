import Login from "./pages/login/Login";
import Register from './pages/register/Register.js';
import MaybeNavBar from './components/maybeNavBar/MaybeNavBar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SideBar from "./components/navbar/SideBar";
import ForumOverview from './pages/forum/ForumOverview';
import NewSet from "./pages/flashcards/NewSet";

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
                <Route path="/flashcards/new-set" element={<NewSet />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;