import PlayButton from "/images/Play-Video-Button-2.png";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Navbar from "../Navbar";

const Header = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });
  return (
    <div className="navbar-head bg-navbar-head-image bg-cover h-screen w-full relative mx-auto p-4">
      <motion.div className="progress-bar bg-red45" style={{ scaleX }} />
      <Navbar />
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

export default Header;
