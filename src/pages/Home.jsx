import React from "react";
import ProductSlider from "./ProductSlider";
import RestroSlider from "./RestroSlider";
import homeImg from "../assets/Images/home.jpg";


function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to  ZaykaExpress</h1>
      <p className="lead">Delicious meals delivered to your doorstep!</p>
      <img src={homeImg} alt="Delicious Food" className="img-fluid rounded shadow" />
      <br /> <br />
      <p>Zayka Express offers users a seamless experience for browsing delicious meals, adding them to a cart, and checking out with ease. Inspired by real-world food delivery platforms, ZaykaExpress brings restaurant-quality dishes right to your doorstep.</p>
      <hr />
      <RestroSlider/>
      <hr />
      <ProductSlider/>
    </div>
  );
}

export default Home;