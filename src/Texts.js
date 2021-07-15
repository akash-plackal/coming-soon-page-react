import React from "react";
import logo from "./logo.svg";
import Email from "./Email";
import Image from "./Image.js";
import "./texts.css";

export default function Texts() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="logo"></img>
        <h1 className="lightH1">we're</h1>
        <h1 className="boldH1">coming</h1>
        <h1 className="boldH1">soon</h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion
          store.Add your email below to stay up to date with announcements and
          our launch deals.
        </p>
      </div>
      <Email />
    </div>
  );
}
