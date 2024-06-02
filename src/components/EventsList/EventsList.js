import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "./EventsList.scss";
import axios from "axios";

import { BACKEND_URL } from "../../constants/constants.js";

const fetchEvents = async (activeMonth, activeYear) => {
  const groupId = sessionStorage.getItem("groupId");

  try {
    const response = await axios.get(
      `${BACKEND_URL}/events/${groupId}/${activeMonth}/${activeYear}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching events", error);
  }
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Define function to get the ordinal suffix for a given day
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const ordinalSuffix = getOrdinalSuffix(day);

  const formattedDate = `${dayOfWeek} ${day}${ordinalSuffix} ${month}`;

  return formattedDate;
}

function formatTime(dateString) {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  // Format the minutes to ensure two digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  // Format the time into the desired string format
  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

  return formattedTime;
}

function EventsList({ activeMonth, activeYear }) {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true);
      const response = await fetchEvents(activeMonth, activeYear);
      setEvents(response);
      setIsLoading(false);
    };
    loadEvents();
  }, [activeMonth, activeYear]);

  if (isLoading) {
    return (
      <section className="loading-container">
        <h1 className="loading-text">Loading...</h1>
      </section>
    );
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[activeMonth - 1];

  if (events.length === 0) {
    return (
      <section className="section">
        <div className="events-header">
          <h2 className="events-title">
            {month} {activeYear ? activeYear : "?"}
          </h2>
          <button
            className="add-rehearsal-button"
            onClick={() => navigate("/rehearsals/add")}
          >
            + Add Rehearsal
          </button>
        </div>
        <div className="cards-container">
          <h3 className="empty-message">
            {activeYear
              ? "Your group has nothing planned this month"
              : "Enter a year above!"}
          </h3>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="events-header">
        <h2 className="events-title">
          {month} {activeYear}
        </h2>
        <button
          className="add-rehearsal-button"
          onClick={() => navigate("/rehearsals/add")}
        >
          + Add Rehearsal
        </button>
      </div>

      <div className="cards-container">
        {events.map((item) => {
          if (item.gig) {
            return (
              <div className="gig-card" key={item.id}>
                <div className="gig-when">
                  <p className="gig-date">{formatDate(item.start_time)}</p>
                  <p className="gig-time">
                    {`${formatTime(item.start_time)} - ${formatTime(item.end_time)}`}
                  </p>
                </div>

                <h3 className="gig-title">{item.title}</h3>
                <p className="gig-address">{item.street_address}</p>

                <div className="gig-view-container">
                  <Link className="gig-view-link" to={item.id}>
                    View
                  </Link>
                </div>
              </div>
            );
          } else {
            return (
              <div className="rehearsal-card" key={item.id}>
                <div className="rehearsal-when">
                  <p className="rehearsal-date">
                    {formatDate(item.start_time)}
                  </p>
                  <p className="rehearsal-time">
                    {`${formatTime(item.start_time)} - ${formatTime(item.end_time)}`}
                  </p>
                </div>

                <h3 className="rehearsal-title">{item.title}</h3>
                <p className="rehearsal-address">{item.street_address}</p>

                <div className="rehearsal-view-container">
                  <Link to={item.id} className="rehearsal-view-link">
                    View
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default EventsList;
