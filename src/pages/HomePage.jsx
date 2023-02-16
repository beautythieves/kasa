/* create home page */
import React from "react";
/* import subHeader component */
import SubHeader from "../components/subHeader/SubHeader";
/* import display card component */
import DisplayCards from "../components/Home/DisplayCards";

/* home page */
export default function Home() {
  return (
    <div>
      <SubHeader />
      <DisplayCards />
    </div>
  );
}
