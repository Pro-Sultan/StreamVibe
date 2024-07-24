import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Update the year every time the component mounts
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="footer">
      <div
        className="container"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="4000"
      >
        <div className="row">
          <div className="col-md-3">
            <h3>Home</h3>
            <ul>
              <li>
                {" "}
                <Link to="">Categories</Link>
              </li>
              <li>
                {" "}
                <Link to="/home/devices">Devices</Link>
              </li>
              <li>
                {" "}
                <Link to="/home/pricing">Pricing</Link>
              </li>
              <li>
                {" "}
                <Link to="/home/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Movies</h3>
            <ul>
              <li>
                {" "}
                <Link to="/movies/genres">Genres</Link>
              </li>
              <li>
                {" "}
                <Link to="/movies/trending">Trending</Link>
              </li>
              <li>
                {" "}
                <Link to="/movies/new-release">New Release</Link>
              </li>
              <li>
                {" "}
                <Link to="/movies/popular">Popular</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Shows</h3>
            <ul>
              <li>
                {" "}
                <Link to="/shows/genres">Genres</Link>
              </li>
              <li>
                {" "}
                <Link to="/shows/trending">Trending</Link>
              </li>
              <li>
                {" "}
                <Link to="/shows/new-release">New Release</Link>
              </li>
              <li>
                {" "}
                <Link to="/shows/popular">Popular</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Support</h3>
            <ul>
              <li>
                {" "}
                <Link to="/support/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Subscription</h3>
            <ul>
              <li>
                {" "}
                <Link to="/subscription/plans">Plans</Link>
              </li>
              <li>
                {" "}
                <Link to="/subscription/features">Features</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 icons">
            <h3>Connect With Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../src/assets/images/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/devsultan01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../src/assets/images/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sultan-a-dev-572673260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../src/assets/images/linkedin.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="copyright"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="4000"
      >
        <p>Copyright &copy; {currentYear} DevSultan</p>
      </div>
    </footer>
  );
};

export default Footer;
