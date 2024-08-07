/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Small_Play_Button from "../../assets/images/small-play-button.png";
import Plus from "../../assets/images/plus.png";
import Thumbs from "../../assets/images/thumbs.png";
import Volume from "../../assets/images/volume.png";
import SwipeLeftImage from "../../assets/images/button-left.png";
import SwipeRightImage from "../../assets/images/button-right.png";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const MovieShow = () => {
  const handleClick = () => {
    window.open("/support", "_blank");
  };

 const [isVisible, setIsVisible] = useState(false);
 const [timer, setTimer] = useState(null);

 const handleLike = () => {
   setIsVisible(true);
   setTimer(
     setTimeout(() => {
       setIsVisible(false);
     }, 3000)
   ); // 3000ms = 3 seconds
 };

  return (
    <div className="movies-show-container">
      <section className="movies-show-box text-white " data-aos="fade-right">
        <h1>Avengers : Endgame</h1>
        <p>
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </p>

        <div className="collections">
          <button
            className="bg-red45 text-white small-play-button font-bold"
            onClick={handleClick}
          >
            {" "}
            <img
              src={Small_Play_Button}
              alt=""
              className="small-play-button-image full-width"
            />
            Play Now
          </button>
          <div className="second-item">
            <button className="plus bg-black10">
              <img src={Plus} alt="" />
            </button>

            <button className="thumbs bg-black10" onClick={handleLike}>
              <img src={Thumbs} alt="" />
            </button>

            <button className="volume bg-black10">
              <img src={Volume} alt="" />
            </button>
          </div>
        </div>

        <div className="swipe flex justify-between items-center gap-20 swipe-movies">
          <button className="swipe-button-prev bg-black10">
            <img src={SwipeLeftImage} alt="" />
          </button>

          <button className="swipe-button-next bg-red45">
            <img src={SwipeRightImage} alt="" />
          </button>
        </div>
        {isVisible && (
          <Alert severity="success" className="success" data-aos="fade-down">
            Thank you for liking our video
          </Alert>
        )}
      </section>
    </div>
  );
};

export default MovieShow;
