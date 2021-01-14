import React from "react";
import Title from "../header/Title";
import More from "../more/More";
import Quote from "../quotes/Quote";
import "./homepage.css";
import { Chrono } from "react-chrono";

function HomePage({ items }) {
  return (
    <div className="homepage">
      <Title />
      <Chrono cardHeight={100} items={items} />
      <Quote />
      <More />
    </div>
  );
}

export default HomePage;
