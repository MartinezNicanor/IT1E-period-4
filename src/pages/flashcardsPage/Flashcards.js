import React from "react";
import "./Flashcards.css";
import Header from "../../components/header/Header";
import Set1 from "./sets/Set1";
import Set2 from "./sets/Set2";
import Set3 from "./sets/Set3";
import Add from "./sets/Add";

const Flashcards = () => {
    return (
        <div>
            <Header title={"Flashcards"} />
            <div className="container">
                <Set1 />
                <Set2 />
                <Set3 />
                <Add />
            </div>
        </div>
    );
}

export default Flashcards;