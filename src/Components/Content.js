import "./Content.css";
import Category from "./Category";
import Cart from "./Cart";

const Content = ({
  data,
  handleAddToCart,
  cart,
  handleIncrementItem,
  handleDecrementItem,
  handleValidateCart,
  popUp,
}) => {
  return (
    <div className="container">
      <div className="main-content">
        <Cart
          handleDecrementItem={handleDecrementItem}
          handleIncrementItem={handleIncrementItem}
          handleValidateCart={handleValidateCart}
          cart={cart}
          popUp={popUp}
        />
        <div className="categories">
          {data.categories.map((category, index) => {
            return (
              <Category
                category={category}
                key={index}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
