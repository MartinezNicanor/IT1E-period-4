import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    

    return (
        <div className="postsList">
            {posts.map(post => (
                <Link to={`/posts/${post.id}`}>
                <div className="postPreview">
                    <div className="postDescription">
                        <h3 className="postTitle">{ post.title }</h3>
                        <p className="description">{ post.description }</p>
                    </div>
                    <div className="postAuthor">
                        <p className="postVotes">{ post.votes } votes</p>
                        <p className="author">{ post.author }</p>
                        <p className="date">asked { post.date }</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
}
 
export default PostList;