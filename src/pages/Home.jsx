import Explore from "../Components/Explore";
import Navbar from "../Components/Navbar";
import NavbarTitle from "../Components/NavbarTitle";
import Devices from "../Components/Devices";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="others">
        <NavbarTitle />
        <Explore />
        <Devices />
      </div>
    </div>
  );
};

export default Home;
