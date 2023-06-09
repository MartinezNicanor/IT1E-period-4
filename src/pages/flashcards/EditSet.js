import React from "react";
import "./EditSet.css";
import Header from "./../../components/header/Header";
import Input from "./editSet/Input";
import Term from "./editSet/Term";
import Definition from "./editSet/Definition";
import Save from "./editSet/Save";
import Add from "./editSet/Add";

export default function EditSet() {
    return (
      <div className="container">
          <Header title={"Edit set"} />
          <Add />

          <Input label={"e.g. Information Management"} />

          <Term label={"Enter here..."} />
          <Definition label={"Enter here..."} />

          <Term label={"Enter here..."} />
          <Definition label={"Enter here..."} />

          <Save />
      </div>
    );
}

