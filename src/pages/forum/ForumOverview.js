import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./ForumOverview.css";
import PostList from "./components/PostList";

const OVerview = () => {
    // This array is only a placeholder 
    const posts = [
        {
            title: "Test post 1",
            description: "Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus...",
            author: "mario",
            date: "00-00-0000",
            votes: "1000",
            id: 1
        },{
            title: "Test post 2",
            description: "Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus...",
            author: "Paul",
            date: "June 8, 2023",
            votes: "1000",
            id: 2
        },{
            title: "Test post 3",
            description: "Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus...",
            author: "Pablo",
            date: "June 8, 2023",
            votes: "1000",
            id: 3
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
                <div className="filterButtons">
                    <button className="relevant">Relevant</button>
                    <button className="newest">Newest</button>
                    <button className="yours">Yours</button>
                </div>
                {posts && <PostList posts = { posts } />}
            </div>
        </div>
    );
}
 
export default OVerview;