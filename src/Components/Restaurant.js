import "./Restaurant.css";

const Restaurant = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="container restaurant-content">
        <div className="call1">
          <h1>{data.restaurant.name}</h1>
          <p className="restaurant-description">
            {data.restaurant.description}
          </p>
        </div>
        <div className="call2">
          <img src={data.restaurant.picture} alt={data.restaurant.name} />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
