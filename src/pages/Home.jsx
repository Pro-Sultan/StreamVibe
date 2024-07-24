import Explore from "../Components/Explore";
import Navbar from "../Components/Navbar";
import NavbarTitle from "../Components/NavbarTitle";
import Devices from "../Components/Devices";
import Preloader from "../Components/Preloader"; // Create a new Preloader component
import { useEffect, useState } from "react";
import Faq from "../Components/Faq";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000); // Simulate a 2-second delay
  }, []);

  return (
    <div>
      {!loaded ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <div className="others">
            <NavbarTitle />
            <Explore />
            <Devices />
            <Faq />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
