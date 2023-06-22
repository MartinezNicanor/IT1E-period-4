import Header from "../../components/header/Header";
import "./Question.css";
import Answers from "./components/Answers";
import Votes from "./components/VotesQuestion"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../components/hooks/useAuthContext";
import jwt_decode from "jwt-decode";

const Question = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(null)
    const [commentIsLoading, setCommentIsLoading] = useState(null)
    const [commentError, setCommentError] = useState(null)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    const [post, setPost] = useState([])
    const [answers, setAnswers] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        setIsLoading(true)
        setError(false)

        const fetchPost = async () => {
            const response = await fetch(
                `https://projectinnovate-it1e-backend-production.up.railway.app/forum/getPost?questionId=${id}`,
                {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${user.token}`},
                }
            );
            const json = await response.json();

            if(!response.ok) {
                setIsLoading(false)
                setError(true)
            }
            if (response.ok) {
                setIsLoading(false)
                setPost(json.question)
                setAnswers(json.comments)
            }
        };

        if (user) {
            fetchPost()
        }
    }, [user, id]);

    const handleSubmit = async(e) => {
        e.preventDefault(e)

        setCommentError(false)
        setCommentIsLoading(true)
        const token = jwt_decode(user.token)
        const userId = token.userId
        const questionId = post._id
        console.log(comment, questionId, userId);

        const response = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/forum/newComment', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({ comment, questionId, userId })
        })
        const json = await response.json()

        if (!response.ok) {
            setCommentIsLoading(false)
            setCommentError(json.message)
            console.log(json.message);
        }

        if (response.ok) {
            setCommentIsLoading(false)
            window.location.reload(true)
        }
    }

    return (
        <div className="questionGrid">
            {error && <div></div>}
            {isLoading && <div className="loadingSpinnerContainer"><div className="loadingSpinner loadingQuestion"></div></div>}
            {!isLoading && <Header title={post.title} />}
            {!isLoading && <div className="questionContainer">
                <div className="question">
                    <div className="questionDescription">
                        <p className="descriptoinsForum">{ post.question }</p>
                        <p className="postTag"><strong className="authorStrong">Topic: </strong>{ post.tag }</p>
                        <p><strong className="authorStrong">{ post.firstName } { post.lastName } -</strong> asked { post.date && post.date.slice(0, 10) }</p>
                    </div>
                    <Votes post={ post } />
                </div>
                <hr />
                <div className="answers">
                    <h4>Answers</h4>
                    {answers && <Answers answers={answers} />}
                </div>
                <hr />
                <div className="postAnswer">
                    <h4>Post your answer</h4>
                    <form className="answerForm" onSubmit={handleSubmit}>
                        <p>Remember to be respectful and clear with your answer!</p>
                        <textarea
                            placeholder="Write your answer..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        {commentError && <div className="authError">{ commentError }</div>}
                        <button disabled={commentIsLoading}>Post your answer</button>
                    </form>
                </div>
            </div>}
        </div>
    );
}
 
export default Question;