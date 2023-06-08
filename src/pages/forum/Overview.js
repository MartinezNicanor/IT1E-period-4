import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Overview.css";
import PostList from "./components/PostList";

const OVerview = () => {
    {/* This array is only a placeholder */}
    const posts = [
        {
            title: "Test post 1",
            description: "Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus...",
            author: "mario",
            date: "00-00-0000",
            votes: "1000"
        },{
            title: "Test post 2",
            description: "Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus...",
            author: "Paul",
            date: "00-00-0000",
            votes: "1000"
        },{
            title: "Test post 3",
            description: "Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus...",
            author: "Pablo",
            date: "June 8, 2023",
            votes: "1000"
        }
    ]

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
                {posts && <PostList posts = { posts } />}
            </div>
            
        </div>
    );
}
 
export default OVerview;