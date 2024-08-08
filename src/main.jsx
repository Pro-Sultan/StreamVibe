import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movie/Movies";
import Subscription from "./pages/Subscription/Subscription";
import Support from "./pages/Support/Support";
import Authentication from "./pages/auth/Authentication";
import NotFound from "./pages/404-page/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/support" element={<Support />} />
      <Route path="/authentication" element={<Authentication />} />
      {/* Define other routes here */}
      <Route path="*" element={<NotFound />} /> {/* 404 route */}
    </Routes>
  </BrowserRouter>
);
