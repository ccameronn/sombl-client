import React from "react";
import "./Landing.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Landing() {
  // SETTING GROUPID ON SESSION STORAGE
  // sessionStorage.setItem("groupId", "1");
  // will need to fetch this info from database after login sequence

  return (
    <div className="container">
      <Header />
      <main>GROUP INFO HERE</main>
      <Footer />
    </div>
  );
}

export default Landing;
