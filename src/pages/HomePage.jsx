/* create home page */
import React from "react";
/* import subHeader component */
import SubHeader from "../components/subHeader/SubHeader";
/* import display card component */
import DisplayCards from "../components/Home/DisplayCards";
import homeImage from "../components/banner/backgroundSubHeader.png"
import Banner from "../components/banner/Banner";
/* home page */
export default function Home() {
  return (
    <main>
      
      <Banner image={homeImage} text = "Chez vous, partout et ailleurs" />
      <SubHeader />
      <DisplayCards />
    </main>
  );
}
