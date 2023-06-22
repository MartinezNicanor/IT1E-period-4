import VotesAnswer from "./VotesAnswer";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Answers = ({ answers }) => {
    return (
        <div className="answerArray">
        {answers.map(answer => (
            <div className="question">
                <div className="description">
                    <p className="descriptoinsForum">{ answer.comment }</p>
                    <p><strong className="authorStrong">{ answer.firstName } { answer.lastName } -</strong> commented { formatDistanceToNow(new Date(answer.date), { addSuffix: true }) }</p>
                </div>
                <VotesAnswer answer={ answer } />
            </div>
        ))}
        </div>
    );
}
 
export default Answers;