import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import PlayButton from "../assets/images/Play-Video-Button-2.png";
import Toggle from '../assets/images/toggle.png'
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Support from "../pages/Support";
import Subscription from "../pages/Subscription";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar-head bg-navbar-head-image bg-cover h-screen w-full relative mx-auto">
      <div className="navbar flex justify-between px-20 py-6 ">
        <div className="logo">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <nav className="nav-links flex text-grey bg-black06 items-center px-3 py-2 rounded-lg">
          <ul className="flex space-x-3">
            <li className="active">
              <Link to={Home} className=" text-white ">Home</Link>
            </li>
            <li className="cursor-pointer items-center justify-center">
              <Link to={Movies}>Movies&Shows</Link>
            </li>
            <li className="cursor-pointer items-center justify-center">
              <Link to={Support}>Support</Link>
            </li>
            <li className="cursor-pointer items-center justify-center">
              <Link to={Subscription}>Subscription</Link>
            </li>
          </ul>
        </nav>

        <div className="right_bar flex space-x-5 items-center">
          <CiSearch className="search-icon cursor-pointer text-white" />
          <IoIosNotificationsOutline className="notification-icon cursor-pointer text-white" />
        </div>

        <div className="toggle">
            <img src={Toggle} alt="" className="cursor-pointer" />
        </div>
      </div>

      <div className="play absolute ">
        <img src={PlayButton} alt="" className="play_video_button cursor-pointer mx-auto" />
      </div>
    </div>
  );
};

export default Navbar;
