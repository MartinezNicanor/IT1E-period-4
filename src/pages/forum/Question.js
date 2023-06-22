import Header from "../../components/header/Header";
import "./Question.css";
import Answers from "./components/Answers";

const Question = () => {
    const question = {
        title: "How can I center a div?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis luctus turpis, a tempus velit cursus nec. Donec quis turpis sodales, tincidunt leo eget, consectetur adipiscing elit. Maecenas sagittis luctus turpis imperdiet eros. Curabitur eu placerat urnaconsectetur adipiscing elit. consectetur adipiscing elit. Maecenas sagittis luctus turpisconsectetur adipiscing elit. Maecenas sagittis luctus turpisconsectetur adipiscing elit. Maecenas sagittis luctus turpis. Maecenas sagittis luctus turpis. Fusce porttitor sem lacinia sem sagittis porttitor. Pellentesque euismod laoreet finibus. Donec ornare dolor vel libero luctus porttitor. Vestibulum mattis et magna sit amet luctus. Morbi fringilla tellus elit, non gravida nulla euismod et. Sed at tellus ultricies dui lobortis aliquam nec sit amet sem.",
        author: "Random user",
        date: "June 10, 2023",
        votes: 1000
    }

    const answers = [
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis luctus turpis, a tempus velit cursus nec. Donec quis turpis sodales, tincidunt leo eget, imperdiet eros. Curabitur eu placerat urna. Fusce porttitor sem lacinia sem sagittis porttitor. Pellentesque euismod laoreet finibus. Donec ornare dolor vel libero luctus porttitor. Vestibulum mattis et magna sit amet luctus. Morbi fringilla tellus elit, non gravida nulla euismod et. Sed at tellus ultricies dui lobortis aliquam nec sit amet sem.",
            author: "Random user",
            date: "June 10, 2023",
            votes: 1000
        },{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis luctus turpis, a tempus velit cursus nec. Donec quis turpis sodales, tincidunt leo eget, imperdiet eros. Curabitur eu placerat urna. Fusce porttitor sem lacinia sem sagittis porttitor. Pellentesque euismod laoreet finibus. Donec ornare dolor vel libero luctus porttitor. Vestibulum mattis et magna sit amet luctus. Morbi fringilla tellus elit, non gravida nulla euismod et. Sed at tellus ultricies dui lobortis aliquam nec sit amet sem.",
            author: "Random user",
            date: "June 10, 2023",
            votes: 1000
        },{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Random user",
            date: "June 10, 2023",
            votes: 1000
        }
    ]

    return (
        <div className="questionGrid">
            <Header title={question.title} />
            <div className="questionContainer">
                <div className="question">
                    <div className="questionDescription">
                        <p className="descriptoinsForum">{ question.description }</p>
                        <p><strong className="authorStrong">{ question.author } -</strong> asked { question.date }</p>
                    </div>
                    <div className="votes">
                        <p>{ question.votes } votes</p>
                        <div className="voteButtons">
                            <span className="material-symbols-outlined">thumb_up</span>
                            <span className="material-symbols-outlined">thumb_down</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="answers">
                    <h4>Answers</h4>
                    {answers && <Answers answers={answers} />}
                </div>
                <hr />
                <div className="postAnswer">
                    <h4>Post your answer</h4>
                    <form className="answerForm">
                        <p>Remember to be respectful and clear with your answer!</p>
                        <textarea
                            placeholder="Write your answer..."
                        />
                        <button>Post your answer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Question;