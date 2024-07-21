/* eslint-disable react/prop-types */

const handleClick = () => {
  window.open("/movies", "_blank");
};

import IconRight from "../assets/images/Icon-right.png";
const Category = ({ title, image }) => {
  return (
    <div className="category bg-black15" onClick={handleClick}>
      <div className="image-box">
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="category-title flex justify-between  ">
        <p>{title}</p>
        <button>
          <img src={IconRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Category;
