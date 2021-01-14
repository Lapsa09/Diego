import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import WithSpinner from "./components/spinner/with-spinner";
import HomePage from "./components/home-page/HomePage";

const HomePageWithSpinner = WithSpinner(HomePage);

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("https://guarded-tor-38591.herokuapp.com/");
    axios
      .get("https://guarded-tor-38591.herokuapp.com/api")
      .then((res) => res.data)
      .then((data) => {
        data.forEach((d) => {
          d.title = d.age;
          d.cardTitle = d.hecho;
          delete d.age;
          delete d.hecho;
        });
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <HomePageWithSpinner loading={loading} items={items} />
    </div>
  );
}

export default App;
