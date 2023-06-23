import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../ForumOverview.css";
import { useAuthContext } from "../../../components/hooks/useAuthContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PostList = ({ filter }) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        setIsLoading(true)

        const fetchPosts = async () => {
            const response = await fetch(
                'https://projectinnovate-it1e-backend-production.up.railway.app/forum',
                {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${user.token}`},
                }
            );
            const json = await response.json();

            if(!response.ok) {
                setIsLoading(false)
            }
            if (response.ok) {
                const filteredPosts = filter !== "all"
                    ? json.questions.filter((post) => post.tag === filter)
                    : json.questions;
                setPosts(filteredPosts)
                setIsLoading(false)
            }
        };

        if (user) {
            fetchPosts()
        }
    }, [user, filter]);

    const sortByDate = (a, b) => {
        const date1 = new Date(a.date)
        const date2 = new Date (b.date)
        if (date1 < date2) return 1
        else if (date1 > date2) return -1
        else return 0
    }

    return (
        <div className="postsList">
            {isLoading && <div className="loadingSpinnerContainer"><div className="loadingSpinner"></div></div>}
            {!isLoading && posts.sort(sortByDate).map(post => (
                <Link to={`/question/${post._id}`}>
                <div className="postPreview">
                    <h3 className="postTitle">{ post.title }</h3>
                    <p className="postTag"><b>Topic: </b>{ post.tag }</p>
                    <p className="postDesc">{ post.question }</p>
                    <div className="postAuthor">
                        <p className="postVotes">{ post.votes } votes</p>
                        <p className="author"><b>{ post.firstName } { post.lastName }</b> asked {formatDistanceToNow(new Date(post.date), { addSuffix: true })}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
}
 
export default PostList;