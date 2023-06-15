import React from "react";
import "./Card.css";

function Card( { frontSide, backSide } ) {
    const [isFront, changeFace] = React.useState(true);
    function handleClick() {
        changeFace(oldState => !oldState);
    }
    const term = isFront ? frontSide : backSide;
    const sideClass = isFront ? "front" : "back";
    const classList = `flash-card ${sideClass}`;
    return (
        <div className={classList} onClick={handleClick}>
            {term}
        </div>
    );
}

export default Card;
