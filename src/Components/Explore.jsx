/* eslint-disable react/no-unescaped-entities */
import SwipeLeftImage from "../assets/images/button-left.png";
import SwipeRightImage from "../assets/images/button-right.png";
import Categories from "./Categories";

const Explore = () => {
  return (
    <div className="explore bg-black10 text-white">
      <div className="header flex justify-between">
        <div className="head">
          <h1 className="text-xl">Explore our wide variety of categories</h1>
          <p className="explore-para text-grey60">
            Whether you're looking for a comedy to make you laugh.
          </p>
        </div>

        <div className="swipe flex justify-between items-center gap-20 bg-black06">
          <div className="swipe-left bg-black10">
            <img src={SwipeLeftImage} alt="" />
          </div>
          {/* <div className="current move"></div>
          <div className="move"></div>
          <div className="move"></div> */}
          <div className="swipe-right bg-black10">
            <img src={SwipeRightImage} alt="" />
          </div>
        </div>
      </div>

      <Categories />
    </div>
  );
};

export default Explore;
