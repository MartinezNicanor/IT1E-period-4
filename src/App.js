import Login from "./pages/login/Login";
import Register from './pages/register/Register.js';
import MaybeNavBar from './components/maybeNavBar/MaybeNavBar.js';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SideBar from "./components/navbar/SideBar";
import ForumOverview from './pages/forum/ForumOverview';
import NewSet from "./pages/flashcards/NewSet";
import { useAuthContext } from "./components/hooks/useAuthContext";

function App() {
    const { user } = useAuthContext()

  return (
    <Router>
        <div className="gridContainer">
            <MaybeNavBar>
                <SideBar />
            </MaybeNavBar>
            <Routes>
                <Route path={"/register"} element={!user ? <Register /> : <Navigate to="/" />} />
                <Route path={"/login"} element={!user ? <Login /> :<Navigate to="/" />} />
                <Route path={"/"} element={user ? <Home /> : <Navigate to="/login" />} />
                <Route path={"/profile"} element={user ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/forum" element={user ? <ForumOverview /> : <Navigate to="/login" />} />
                <Route path="/flashcards/new-set" element={<NewSet />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;