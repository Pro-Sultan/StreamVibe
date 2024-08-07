/* eslint-disable react/no-unknown-property */
import video from "../../src/assets/images/Avengers Endgame _ The Big Three Fight Scenes.mp4";
import Navbar from "../Components/Navbar";

const Support = () => {
  return (
    <div className="bg-black10">
      <Navbar />
      <div className="vid-tag">
        <video autoPlay controls="true">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Support;
