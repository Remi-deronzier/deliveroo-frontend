import "./Categories.css";
import Category from "./Category";

const Categories = ({ data }) => {
  return (
    <div className="container">
      <div className="categories">
        {data.categories.map((category, index) => {
          return <Category category={category} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
