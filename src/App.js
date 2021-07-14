import "./App.css";
import Header from "./Components/Header";
import Restaurant from "./Components/Restaurant";
import Categories from "./Components/Categories";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-api-remi.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <main>
        <Restaurant data={data} />
        <Categories data={data} />
      </main>
    </>
  );
};

export default App;
