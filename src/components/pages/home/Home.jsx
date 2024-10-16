import React from "react";
import Header from "../../partials/Header";
import HomeBanner from "./HomeBanner";
import HomeTrending from "./HomeTrending";
import HomeSticky from "./HomeSticky";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HomeBanner/>
      <HomeTrending/>
      <HomeSticky/>
      <Footer/>
    </>
  );
};

export default Home;
