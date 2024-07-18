import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import PlayButton from "../assets/images/Play-Video-Button-2.png";
import Toggle from "../assets/images/toggle.png";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Links from "../JS/Links";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSearchClick = () => setIsSearchOpen(!isSearchOpen);
  const handleNotificationsClick = () =>
    setIsNotificationsOpen(!isNotificationsOpen);

  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" }); // adjust the breakpoint as needed

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  useLayoutEffect(() => {
    const animation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700)); // wait for 700ms
      setIsLoading(false);
    };
    animation();
  }, []);

  useEffect(() => {
    try {
      const speech = new SpeechSynthesisUtterance();
      speech.text = "Welcome to StreamVibe";
      speech.lang = "en-US";
      speech.rate = 1;
      speech.volume = 1;
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error("Error speaking:", error);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar-head bg-navbar-head-image bg-cover h-screen w-full relative mx-auto">
      <div className="navbar flex justify-between px-20 py-6">
        <div className="logo">
          <a href="">
            <motion.img
              src={Logo}
              alt=""
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </a>
        </div>

        <nav className="nav-links flex text-grey bg-black06 items-center px-3 py-2 rounded-lg">
          <ul className="flex space-x-3">
            {Links.map((link, index) => (
              <Link to={link.href} key={index}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <motion.nav
          initial={{
            x: isMenuOpen ? 0 : "-100%",
            boxShadow: isMenuOpen
              ? "0px 10px 20px rgba(0,0,0,0.2)"
              : "0px 0px 0px rgba(0,0,0,0)",
          }}
          animate={
            isMenuOpen
              ? { x: 0, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }
              : { x: "-100%", boxShadow: "0px 0px 0px rgba(0,0,0,0)" }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="nav-links z-50 block tablet:block  w-full text-grey bg-black06 items-center absolute top-60 bottom-0 right-0 left-0 overflow-hidden"
        >
          <ul className="tablet:block space-y-7 tablet:h-screen align-middle text-center">
            {Links.map((link, index) => (
              <motion.li
                key={index}
                initial={{
                  x: isMenuOpen ? 0 : -20,
                  opacity: isMenuOpen ? 1 : 0,
                }}
                animate={
                  isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link to={link.href}>{link.label}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <div className="right_bar flex space-x-5 items-center">
          <CiSearch
            className="search-icon cursor-pointer text-white"
            onClick={handleSearchClick}
          />
          {isSearchOpen && (
            <input
              type="search"
              placeholder="Search..."
              className="search-input bg-white text-grey px-3 py-2 rounded-lg"
            />
          )}
          <IoIosNotificationsOutline
            className="notification-icon cursor-pointer text-white"
            onClick={handleNotificationsClick}
          />
          {isNotificationsOpen && (
            <div className="notification-box absolute bg-white rounded-lg p-3 shadow-md">
              <h5 className="text-lg font-bold mb-2">Notifications</h5>
              <ul>
                <li className="text-lg">Notification 1</li>
                <li className="text-lg">Notification 2</li>
                <li className="text-lg">Notification 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="toggle" onClick={toggleMenu}>
          <img src={Toggle} alt="" className="cursor-pointer" />
        </div>
      </div>

      <div className="play absolute">
        <img
          src={PlayButton}
          alt=""
          className="play_video_button cursor-pointer mx-auto"
        />
      </div>
    </div>
  );
};

export default Navbar;
