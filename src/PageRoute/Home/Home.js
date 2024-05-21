import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "./Home.scss";
// import axios from "axios";

// import { BACKEND_URL } from "../../constants/constants.js";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [activeMonth, setActiveMonth] = useState(1);
  const [activeYear, setActiveYear] = useState(2024);

  const handleYearChange = (event) => {
    setActiveYear(event.target.value);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <form className="year-form">
          <input
            type="number"
            min="1900"
            max="2099"
            step="1"
            value={activeYear}
            className="year-input"
            onChange={handleYearChange}
          />
        </form>
        <nav className="sub-nav">
          <button
            className={activeMonth === 1 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(1);
            }}
          >
            January
          </button>
          <button
            className={activeMonth === 2 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(2);
            }}
          >
            February
          </button>
          <button
            className={activeMonth === 3 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(3);
            }}
          >
            March
          </button>
          <button
            className={activeMonth === 4 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(4);
            }}
          >
            April
          </button>
          <button
            className={activeMonth === 5 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(5);
            }}
          >
            May
          </button>
          <button
            className={activeMonth === 6 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(6);
            }}
          >
            June
          </button>
          <button
            className={activeMonth === 7 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(7);
            }}
          >
            July
          </button>
          <button
            className={activeMonth === 8 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(8);
            }}
          >
            August
          </button>
          <button
            className={activeMonth === 9 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(9);
            }}
          >
            September
          </button>
          <button
            className={activeMonth === 10 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(10);
            }}
          >
            October
          </button>
          <button
            className={activeMonth === 11 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(11);
            }}
          >
            November
          </button>
          <button
            className={activeMonth === 12 ? "month month-active" : "month"}
            onClick={() => {
              setActiveMonth(12);
            }}
          >
            December
          </button>
        </nav>

        <section>
          <div className="">
            <h2 className="">Plan for April</h2>
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
