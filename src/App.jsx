import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
