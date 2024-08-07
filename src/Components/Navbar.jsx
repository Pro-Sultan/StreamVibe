import { Link } from "react-router-dom";
import Logo from "/images/Logo.png";
import Toggle from "/images/toggle.png";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Links from "../JS/Links";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsNotificationsOpen(false);
    setIsSearchOpen(false);
  };
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNotificationsOpen(false);
    setIsMenuOpen(false);
  };
  const handleNotificationsClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

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

  const handleCloseMenus = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsNotificationsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        handleCloseMenus();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsMenuOpen, setIsSearchOpen, setIsNotificationsOpen]);

  return (
    <div className="navbar flex justify-between px-20 py-6" data-aos="fade-up">
      <div className="logo">
        <Link to="/">
          <motion.img
            src={Logo}
            alt=""
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </Link>
      </div>

      <nav className="nav-links flex text-grey bg-black06 items-center px-3 py-2 rounded-lg">
        <ul className="flex space-x-3">
          {Links.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              target={link.label !== "Home" ? "_blank" : "_self"}
            >
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
        className="nav-links z-50 block tablet:block h-screen  w-full text-grey bg-black06 items-center absolute top-40 bottom-0 right-0 left-0"
      >
        <ul className="tablet:block space-y-7  align-middle text-center">
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
              <Link
                to={link.href}
                target={link.label !== "Home" ? "_blank" : "_self"}
                onClick={(event) => {
                  if (link.label === "Home") {
                    event.preventDefault();
                    history.push(link.href);
                    window.scrollTo(0, 0);
                  }
                }}
              >
                {link.label}
              </Link>
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
            className="search-input bg-white text-grey px-3 py-2 rounded-lg absolute top-[105px] right-[130px]"
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
  );
};

export default Navbar;
