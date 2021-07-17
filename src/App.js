import "./App.css";
import Header from "./Components/Header";
import Restaurant from "./Components/Restaurant";
import Content from "./Components/Content";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Components/Footer";
import PopUp from "./Components/PopUp";
library.add(faStar, faPlusCircle, faMinusCircle, faCheckSquare);

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleAddToCart = (mealId) => {
    let isAlereadyInCart = false;
    let indexIsAlereadyInCart = 0;
    for (let i = 0; i < cart.length; i++) {
      if (mealId === cart[i].id) {
        isAlereadyInCart = true;
        indexIsAlereadyInCart = i;
        break;
      }
    }
    data.categories.forEach((element) =>
      element.meals.forEach((element) => {
        if (element.id === mealId && !isAlereadyInCart) {
          element.counter = 1;
          element.totalPrice = Number(element.price);
          const newCart = [...cart, element];
          setCart(newCart);
        } else if (element.id === mealId && isAlereadyInCart) {
          const newCart = [...cart];
          newCart[indexIsAlereadyInCart].counter++;
          newCart[indexIsAlereadyInCart].totalPrice += Number(
            newCart[indexIsAlereadyInCart].price
          );
          setCart(newCart);
        }
      })
    );
  };

  const handleDecrementItem = (mealId) => {
    cart.forEach((element, index) => {
      if (mealId === element.id) {
        const newCart = [...cart];
        newCart[index].totalPrice -= Number(newCart[index].price);
        newCart[index].counter--;
        if (newCart[index].counter === 0) {
          newCart.splice(index, 1);
        }
        setCart(newCart);
      }
    });
  };

  const handleIncrementItem = (mealId) => {
    cart.forEach((element, index) => {
      if (mealId === element.id) {
        const newCart = [...cart];
        newCart[index].totalPrice += Number(newCart[index].price);
        newCart[index].counter++;
        setCart(newCart);
      }
    });
  };

  const handleValidateCart = () => {
    const total = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(cart.reduce((sum, e) => (sum += e.totalPrice), 2.5));
    setTotalPrice(total);
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 5000);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <PopUp popUp={popUp} totalPrice={totalPrice} />
      <main>
        <Restaurant data={data} />
        <Content
          data={data}
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleDecrementItem={handleDecrementItem}
          handleIncrementItem={handleIncrementItem}
          handleValidateCart={handleValidateCart}
          popUp={popUp}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
