import React from "react";
import Title from "../header/Title";
import More from "../more/More";
import Quote from "../quotes/Quote";
import Table from "../timeline/Table";

function HomePage() {
  return (
    <div>
      <Title />
      <Table />
      <Quote />
      <More />
    </div>
  );
}

export default HomePage;
