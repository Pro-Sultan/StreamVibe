// /* eslint-disable react/no-unescaped-entities */
// import SwipeLeftImage from "../assets/images/button-left.png";
// import SwipeRightImage from "../assets/images/button-right.png";
// import categories from "../JS/categories";
// import IconRight from "../assets/images/Icon-right.png";

// /* eslint-disable react/prop-types */

// const handleClick = () => {
//   window.open("/movies", "_blank");
// };

// const Category = ({ title, image }) => {
//   return (
//     <div className="category bg-black15" onClick={handleClick}>
//       <div className="image-box">
//         <img src={image} alt="" className="w-full" />
//       </div>

//       <div className="category-title flex justify-between  ">
//         <p>{title}</p>
//         <button>
//           <img src={IconRight} alt="" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const Explore = () => {
//   return (
//     <div className="explore bg-black10 text-white">
//       <div className="header flex justify-between">
//         <div className="head">
//           <h1 className="text-xl">Explore our wide variety of categories</h1>
//           <p className="explore-para text-grey60">
//             Whether you're looking for a comedy to make you laugh.
//           </p>
//         </div>

//         <div className="swipe flex justify-between items-center gap-20 bg-black06">
//           <div className="swipe-button-prev bg-black10">
//             <img src={SwipeLeftImage} alt="" />
//           </div>
//           {/* <div className="current move"></div>
//           <div className="move"></div>
//           <div className="move"></div> */}
//           <div className="swipe-button-next bg-black10">
//             <img src={SwipeRightImage} alt="" />
//           </div>
//         </div>
//       </div>

//       <div className="categories">
//         {categories.map((categories) => (
//           <Category key={categories.title} {...categories} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Explore;













const Movies = () => {
  return (
    <div style={{ width: 900, padding: "40px" }}>
      
    </div>
  );
};

export default Movies;
