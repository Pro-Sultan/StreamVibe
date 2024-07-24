/* eslint-disable react/prop-types */

import IconRight from "../assets/images/Icon-right.png";

const handleClick = () => {
  window.open("/movies", "_blank");
};

const Category = ({ title, image }) => {
  return (
    <div
      className="category bg-black15"
      onClick={handleClick}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
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
