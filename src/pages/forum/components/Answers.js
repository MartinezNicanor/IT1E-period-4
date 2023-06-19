const Answers = ({ answers }) => {
    return (
        <div className="answerArray">
        {answers.map(answer => (
            <div className="question">
                <div className="description">
                    <p className="descriptoinsForum">{ answer.description }</p>
                    <p><strong className="authorStrong">{ answer.author } -</strong> asked { answer.date }</p>
                </div>
                <div className="votes">
                    <p className="votesText">{ answer.votes } votes</p>
                    <div className="voteButtons">
                        <span className="material-symbols-outlined">thumb_up</span>
                        <span className="material-symbols-outlined">thumb_down</span>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
}
 
export default Answers;