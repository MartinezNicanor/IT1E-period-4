import Login from "./pages/login/Login";
import Register from './pages/register/Register.js';
import MaybeNavBar from './components/maybeNavBar/MaybeNavBar.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Profile from './pages/profile/Profile';
import OpenedAssignment from './pages/assignments/openedAssignment/OpenedAssignment';
import Flashcards from "./pages/flashcardsPage/Flashcards";
import GenerateTestPage from "./pages/testGenerate/generateTest";
import AssignmentsTopics from './pages/assignments/assignmentsTopics/AssignmentsTopics';
import Question from './pages/forum/Question';
import AskForum from './pages/forum/AskForum';
import SideBar from "./components/navbar/SideBar";
import ForumOverview from './pages/forum/ForumOverview';
import TestPage from './pages/multipleChoiceTest/TestPage';
import Card from "./pages/lookThroughSets/Card";
import NewSet from "./pages/flashcards/NewSet";
import Error from "./pages/error404/Error";
import AssignmentView from './pages/assignments/assignmentsList/AssignmentView';
import MaybeFooter from "./components/footer/MaybeFooter";
import { useAuthContext } from "./components/hooks/useAuthContext";
import TestResults from "./pages/testResults/TestResults";
import ProgressPage from "./pages/progress/ProgressPage";

function App() {
  const { user } = useAuthContext()

  return (
    <div>
        {user === null &&
        <Router>
            <div className="gridContainer">
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path={"/register"} element={<Register />} />
                </Routes>
            </div>
        </Router>
        }
        {user !== null &&
            <Router>
                <div className="gridContainer">
                    <MaybeNavBar>
                        <SideBar />
                    </MaybeNavBar>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/profile"} element={<Profile />} />
                        <Route path="/forum" element={<ForumOverview />} />
                        <Route path="/flashcards" element={<Flashcards />} />
                        <Route path="/flashcards/:id" element={<Card />} />
                        <Route path="/question/:id" element={<Question />} />
                        <Route path="/askForum" element={<AskForum />} />
                        <Route path="/assignments" element={<AssignmentsTopics />} />
                        <Route path="/testResults" element={<TestResults />} />
                        <Route path="/assignments/:topic" element={<AssignmentView />} />
                        <Route path='*' element={<Error />} />
                        <Route path={"/progress"} element={<ProgressPage />} />
                        <Route path="/generateTest" element={<GenerateTestPage />} />
                        <Route path="/test" element={<TestPage />} />
                        <Route path="/flashcards/new-set" element={<NewSet />} />
                        <Route path="/assignments/:topic/:id" element={<OpenedAssignment />} />
                    </Routes>
                    <MaybeFooter>
                        <Footer />
                    </MaybeFooter>
                </div>
            </Router>
        }
    </div>
  );
}

export default App;