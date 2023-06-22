import { useState } from "react"
import { useAuthContext } from "../../../components/hooks/useAuthContext"

const Votes = ({ post }) => {
    const [error, setError] = useState(null)
    const [voted, setVoted] = useState('')
    const { user } = useAuthContext()
    const type = "question"
    const id = post._id

    const handleLike = async (e) => {
        e.preventDefault()

        const value = "1"
        setError(null)
        setVoted(null)

        const response = await fetch(`https://projectinnovate-it1e-backend-production.up.railway.app/forum/getPost??questionId=${ id }`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json; charset=UTF-8', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({ type, id, value })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.message)
        }

        if (response.ok) {
            setVoted(json.message)
        }
    }

    const handleDislike = async (e) => {
        e.preventDefault()

        const value = "-1"
        setError(null)
        setVoted(null)

        const response = await fetch(`https://projectinnovate-it1e-backend-production.up.railway.app/forum/getPost?questionId=${ id }`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json; charset=UTF-8', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({ type, id, value })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.message)
        }

        if (response.ok) {
            setVoted(json.message)
        }
    }

    return (
        <div className="votes">
            <p>{ post.votes } votes</p>
            <div className="voteButtons">
                <button onClick={handleLike} className="material-symbols-outlined voteButton">thumb_up</button>
                <button onClick={handleDislike} className="material-symbols-outlined voteButton">thumb_down</button>
            </div>
            {voted && <div className="voteSuccess">{ voted }</div>}
            {error && <div className="voteError">{ error }</div>}
        </div>
    );
}
 
export default Votes;