import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Movies from "./pages/Movies";
import Subscription from "./pages/Subscription";
import Support from "./pages/Support";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  </Router>
);