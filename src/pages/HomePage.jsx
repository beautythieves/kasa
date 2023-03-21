import React from "react";
import SubHeader from "../components/subHeader/SubHeader";
import DisplayCards from "../components/Home/DisplayCards";
// import homeImage from "../components/banner/backgroundSubHeader.png"
// import Banner from "../components/banner/Banner";
export default function Home() {
  return (
    <main>
      {/* <Banner image={homeImage} text = "Chez vous, partout et ailleurs" /> */}
      <SubHeader />
      <DisplayCards />
    </main>
  );
}
