import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Meal.css";

const Meal = ({ meal, handleAddToCart }) => {
  return (
    <div
      className="meal"
      key={meal.id}
      onClick={() => handleAddToCart(meal.id)}
    >
      <div className={meal.picture ? "meal-information" : undefined}>
        <h3>{meal.title}</h3>
        {meal.description && (
          <p className="meal-description">{meal.description}</p>
        )}
        <p className="meal-price-popular">
          <span>
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(meal.price)}
          </span>
          {meal.popular && (
            <>
              <FontAwesomeIcon icon="star" className="icon-star" />
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
};

export default Meal;
