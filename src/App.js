import React from "react";
import Banner from "./components/Banner/Banner";
import Bestselling from "./components/BestSelling/Bestselling";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Books from "./components/Other-products/Books/Books";
import Recommended from "./components/Recommended/Recommended";
import Sponsord from "./components/Sponsord/Sponsord";
import Valentine from "./components/ValentineDay/Valentine";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Sponsord />
      <Valentine />
      <Recommended />
      <Bestselling />
      <Books />
      <Footer />
    </div>
  );
};

export default App;
