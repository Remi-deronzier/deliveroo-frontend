import "./App.css";
import Header from "./Components/Header";
import Restaurant from "./Components/Restaurant";
import { useState, useEffect } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header />
      <main>
        <Restaurant data={data} />
        <div className="container">
          <div className="categories">
            {data.categories.map((category, index) => {
              return (
                category.meals.length !== 0 && (
                  <div className="category" key={index}>
                    <h2>{category.name}</h2>
                    <div className="category-content">
                      {category.meals.map((meal, index) => {
                        return (
                          <div className="meal" key={index}>
                            <div
                              className={
                                meal.picture ? "meal-information" : undefined
                              }
                            >
                              <h3>{meal.title}</h3>
                              {meal.description && (
                                <p className="meal-description">
                                  {meal.description}
                                </p>
                              )}
                              <p className="meal-price-popular">
                                <span>{meal.price.replace(".", ",")} €</span>
                                {meal.popular && (
                                  <>
                                    <FontAwesomeIcon
                                      icon="star"
                                      className="icon-star"
                                    />
                                    <span className="popular">Populaire</span>
                                  </>
                                )}
                              </p>
                            </div>
                            {meal.picture && (
                              <div className="meal-picture">
                                <img src={meal.picture} alt={meal.title} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
