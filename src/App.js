import "./App.css";
import HomePage from "./components/home-page/HomePage";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("https://guarded-tor-38591.herokuapp.com/");
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
