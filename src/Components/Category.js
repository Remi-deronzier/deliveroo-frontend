import "./Category.css";
import Meal from "./Meal";

const Category = ({ category, index, handleAddToCart }) => {
  return (
    <>
      {category.meals.length !== 0 && (
        <div className="category" key={index}>
          <h2>{category.name}</h2>
          <div className="category-content">
            {category.meals.map((meal, index) => {
              return (
                <Meal
                  meal={meal}
                  key={index}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
