/* eslint-disable react/prop-types */
import IconRight from "../assets/images/Icon-right.png";
const Category = ({ title, image }) => {
  return (
    <div className="category bg-black15">
      <div className="image-box">
        <img src={image} alt="" />
      </div>

      <div className="category-title flex justify-between">
        <p>{title}</p>
        <button>
          <img src={IconRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Category;
