import "./AskForum.css";
import Header from "../../components/header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../../components/hooks/useAuthContext";

const AskForum = () => {
    const { user } = useAuthContext()
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [tag, setTag] = useState('other');
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(false)
        setIsLoading(true)
        const token = jwt_decode(user.token)
        const userId = token.userId

        const response = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/forum/newPost', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({ title, question, userId, tag})
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.message)
            setIsLoading(false)
            setTitle('')
            setQuestion('')
            setTag('other')
        }

        if (response.ok) {
            alert(json.message)
            setIsLoading(false)
            navigate('/forum')
        }
    }

    return (
        <div className="askForumContainer">
            <Header title="Ask a question" />
            <form className="askForm" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <h2>Question title</h2>
                    <p>Be specific and clear. Summarize the problem!</p>
                    <input
                        type="text"
                        required
                        value={title}
                        placeholder="Give a title to your question..."
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <h2>Describe your problem</h2>
                    <p>Introduce the problem and expand on what you put in the title.</p>
                    <textarea
                        type="text"
                        required
                        value={question}
                        placeholder="Describe your question..."
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <h2>Tags</h2>
                    <p>Add tags to describe what your question is about.</p>
                    <div className="radioButtons">
                        <div className="htmlRadio">
                            <input
                                type="radio"
                                name="tag"
                                id="htmlInput"
                                value="HTML/CSS"
                                placeholder="Give a title to your question..."
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <label htmlFor="htmlInput">HTML/CSS</label>
                        </div>
                        <div className="phpRadio">
                            <input
                                type="radio"
                                name="tag"
                                id="phpInput"
                                value="PHP"
                                placeholder="Give a title to your question..."
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <label htmlFor="phpInput">PHP</label>
                        </div>
                        <div className="javaRadio">
                            <input
                                type="radio"
                                name="tag"
                                id="javaInput"
                                value="JAVA"
                                placeholder="Give a title to your question..."
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <label htmlFor="javaInput">JAVA</label>
                        </div>
                        <div className="otherRadio">
                            <input
                                type="radio"
                                name="tag"
                                id="otherInput"
                                value="Other"
                                placeholder="Give a title to your question..."
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <label htmlFor="otherInput">OTHER</label>
                        </div>
                    </div>
                </div>
                <button disabled={ isLoading } className="postQuestion">Post you question</button>
                {error && <div className="authError">{ error }</div>}
            </form>
        </div>
    );
}
 
export default AskForum;