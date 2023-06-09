import "./AskForum.css";
import Header from "../../components/header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AskForum = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tag, setTag] = useState('other');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, desc, tag };
        console.log(post);
        navigate("/forum");
    }

    return (
        <div className="askForumContainer">
            <Header title="Ask a question" />
            <form onSubmit={handleSubmit}>
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
                        value={desc}
                        placeholder="Describe your question..."
                        onChange={(e) => setDesc(e.target.value)}
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
                                value="html"
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
                                value="php"
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
                                value="java"
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
                                value="other"
                                placeholder="Give a title to your question..."
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <label htmlFor="otherInput">OTHER</label>
                        </div>
                    </div>
                </div>
                <button className="postQuestion">Post you question</button>
            </form>
        </div>
    );
}
 
export default AskForum;