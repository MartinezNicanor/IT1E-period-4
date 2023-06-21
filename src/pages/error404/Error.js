import { Link } from "react-router-dom";
import "./Error.css"
import computer from "../../assets/images/computer.png";

const Error = () => {
    return (
        <div className="notFound">
            <img src={computer} alt="Computer" />
            <div className="textOverlay">
                <h1>404 ERROR</h1>
                <h2>PAGE NOT FOUND</h2>
                <Link to="/">Back to homepage</Link>
            </div>
        </div>
    );
}

export default Error;