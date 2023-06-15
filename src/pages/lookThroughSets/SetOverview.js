import React from "react";
import "./SetOverview.css"
import Header from "../../components/header/Header";
import Card from "./components/Card";

export default function SetOverview() {
    return (
        <div className="set-overview-container">
            <Header title={"Set - Random name"} />
            <div className="set-overview-elements">
                <Card frontSide="React" backSide="React is a framework of JavaScript" />
                <Card frontSide="Java" backSide="Some random fact" />
            </div>
        </div>
    );
}
