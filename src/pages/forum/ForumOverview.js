import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./ForumOverview.css";
import PostList from "./components/PostList";
import { useState } from "react";

const Overview = () => {
    const [filter, setFilter] = useState('all')

    const handleFilter = (e) => {
        e.preventDefault()

        setFilter(e.target.value)
    }

    return (
        <div className="overviewContainer">
            <Header title="Forum" />
            <div className="forumOverview">
                <div className="overviewHeader">
                    <h3 className="forumTitle">Explore our forum</h3>
                    <Link to={'/askForum'}>
                        <p className="askButton">Ask a question</p>
                    </Link>
                </div>
                <div className="filterButtons">
                    <button onClick={handleFilter} value="JAVA" className="javaFilter">Java</button>
                    <button onClick={handleFilter} value="HTML/CSS" className="htmlFilter">WebDev</button>
                    <button onClick={handleFilter} value="PHP" className="phpFilter">Php</button>
                    <button onClick={handleFilter} value="all" className="allFilter">All</button>
                </div>
                <PostList filter={ filter } />
            </div>
        </div>
    );
}
 
export default Overview;