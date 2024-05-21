import { Link } from "react-router-dom";
// import { React, useState, useEffect } from "react";
import React from "react";
import "./Home.scss";

// import axios from "axios";

// import { BACKEND_URL } from "../../constants/constants.js";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <nav>
          <button className="" href="#">
            January
          </button>
          <button className="" href="#">
            February
          </button>
          <button className="" href="#">
            March
          </button>
          <button className="" href="#">
            April
          </button>
          <button className="" href="#">
            May
          </button>
          <button className="" href="#">
            June
          </button>
          <button className="" href="#">
            July
          </button>
          <button className="" href="#">
            August
          </button>
          <button className="" href="#">
            September
          </button>
          <button className="" href="#">
            October
          </button>
          <button className="" href="#">
            November
          </button>
          <button className="" href="#">
            December
          </button>
        </nav>
        <section>
          <div className="">
            <h2 className="">Rehearsals & Gigs for April</h2>
            <button size="">
              <img src="" alt="plus-icon" className="" />
              Add Rehearsal
            </button>
          </div>

          <div className="">
            <div className="">
              <div className="">
                <img src="" alt="calendar-icon" className="" />
                <span className="">April 5th, 2023</span>
              </div>
            </div>
            <h3 className="">Band Practice</h3>
            <p className="">Prepare for upcoming gig at the local venue.</p>
            <div className="">
              <Link className="" to="/">
                View Rehearsal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
