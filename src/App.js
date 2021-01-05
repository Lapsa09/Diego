import "./App.css";
import Title from "./components/header/Title";
import Quote from "./components/quotes/Quote";
import Table from "./components/timeline/Table";
import More from "./components/more/More";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://guarded-tor-38591.herokuapp.com/")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="App">
      <Title />
      <Table data={data} />
      <Quote />
      <More />
    </div>
  );
}

export default App;
