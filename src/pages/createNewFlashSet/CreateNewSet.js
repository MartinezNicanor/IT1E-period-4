import React from "react";
import "./css/CreateNewSet.css";
import Input from "./components/Input";
import Term from "./components/Term";
import Definition from "./components/Definition";
import Button from "./components/Button";
import Header from './../../components/header/Header.js';

export default function CreateNewSet() {
    return (
        <div className="container">
            <Header title={"Create new set"} />
            <Input label={"e.g. Information Management"} />

            <Term label={"Enter here..."}/>
            <Definition label={"Enter here..."} />

            <Term label={"Enter here..."}/>
            <Definition label={"Enter here..."} />

            <Button />
        </div>
    );
}