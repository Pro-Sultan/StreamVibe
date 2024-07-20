import Category from "./Category";
import categories from "../JS/categories";

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((categories) => (
        <Category key={categories.title} {...categories} />
      ))}
    </div>
  );
};

export default Categories;
