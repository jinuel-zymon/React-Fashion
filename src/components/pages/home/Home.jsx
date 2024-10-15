import React from "react";
import Header from "../../partials/Header";
import HomeBanner from "./HomeBanner";
import HomeTrending from "./HomeTrending";
import HomeSticky from "./HomeSticky";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBanner/>
      <HomeTrending/>
      <HomeSticky/>
    </>
  );
};

export default Home;
