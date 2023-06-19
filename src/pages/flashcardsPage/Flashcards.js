import React from "react";
import "./Flashcards.css";
import Header from "../../components/header/Header";
import Add from "./components/Add";
import SetList from "./components/Set";

const Flashcards = () => { 

    const sets = [
        {
            title: "PHP Arrays",
            id: 1
        },{
            title: "HTML Semantics",
            id: 2
        },{
            title: "CSS Flexboxes",
            id: 3
        },{
            title: "JAVA Getters and Setters",
            id: 4
        },
        {
            title: "PHP Loops",
            id: 5
        },
        {
            title: "INFO-MAN Chapter 5",
            id: 6
        },
        {
            title: "INFO-MAN Chapter",
            id: 7
        },
    ]
    return (
        <div className="container">
            <Header title={"Flashcards"} />
            <div className="setContainer">
                <div className = "setsBox">
                    {sets && <SetList sets = { sets } />}
                </div>
                <Add />
            </div>
        </div>
    );
}

export default Flashcards;