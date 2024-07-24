import Explore from "../Components/Home Component/Explore";
import Navbar from "../Components/Home Component/Navbar";
import NavbarTitle from "../Components/Home Component/NavbarTitle";
import Devices from "../Components/Home Component/Devices";
import Preloader from "../Components/Home Component/Preloader"; // Create a new Preloader component
import { useEffect, useState } from "react";
import Faq from "../Components/Home Component/Faq";
import Pricing from "../Components/Home Component/Plan";
import Trial from "../Components/Home Component/Trial";


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
            <Pricing/>
            <Trial/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
