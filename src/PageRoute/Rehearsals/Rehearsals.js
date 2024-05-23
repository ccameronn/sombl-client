import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "./Rehearsals.scss";
// import axios from "axios";

// import { BACKEND_URL } from "../../constants/constants.js";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EventsList from "../../components/EventsList/EventsList";

const storeMonth = (month) => {
  sessionStorage.setItem("storedMonth", `${month}`);
};
const getMonth = () => {
  const month = sessionStorage.getItem("storedMonth");
  return month ? month : 1;
};

const storeYear = (year) => {
  sessionStorage.setItem("storedYear", `${year}`);
};
const getYear = () => {
  const year = sessionStorage.getItem("storedYear");
  return year ? parseInt(year, 10) : 2024;
};

function Home() {
  const [activeMonth, setActiveMonth] = useState(getMonth());
  const [activeYear, setActiveYear] = useState(getYear());

  // SETTING GROUPID ON SESSION STORAGE
  sessionStorage.setItem("groupId", "1");

  useEffect(() => {
    storeMonth(activeMonth);
  }, [activeMonth]);

  useEffect(() => {
    storeYear(activeYear);
  }, [activeYear]);

  const handleYearChange = (event) => {
    setActiveYear(parseInt(event.target.value, 10));
  };

  const handleMinusYear = (event) => {
    event.preventDefault();
    setActiveYear((prevYear) => Math.max(1900, prevYear - 1));
  };

  const handleAddYear = (event) => {
    event.preventDefault();
    setActiveYear((prevYear) => Math.min(2030, prevYear + 1));
  };

  return (
    <div className="container">
      <Header />
      <main>
        <form className="year-form">
          <button
            className="increment-button"
            onClick={(event) => handleMinusYear(event)}
          >
            {`<`}
          </button>
          <input
            type="number"
            min="1900"
            max="2030"
            step="1"
            value={activeYear}
            className="year-input"
            onChange={handleYearChange}
            required
            // readonly="readonly"
          />
          <button
            className="increment-button"
            onClick={(event) => handleAddYear(event)}
          >
            {`>`}
          </button>
        </form>

        <nav className="sub-nav">
          {Array.from({ length: 12 }, (_, i) => (
            <button
              key={i + 1}
              className={activeMonth == i + 1 ? "month month-active" : "month"}
              onClick={() => setActiveMonth(i + 1)}
            >
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </button>
          ))}
        </nav>

        <EventsList activeMonth={activeMonth} activeYear={activeYear} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
