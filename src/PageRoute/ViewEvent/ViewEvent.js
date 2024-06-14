import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "./ViewEvent.scss";
import axios from "axios";

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

import { BACKEND_URL } from "../../constants/constants.js";

const fetchEventDetails = async (id) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/events/${id}`);
    return response.data[0];
  } catch (error) {
    console.log("Error fetching event details", error);
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
  // const year = date.getFullYear();

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

function ViewRehearsal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [eventDetails, setEventDetails] = useState([]);

  useEffect(() => {
    const loadEventDetails = async () => {
      setIsLoading(true);
      const response = await fetchEventDetails(id);
      setEventDetails(response);
      setIsLoading(false);
    };
    loadEventDetails();
  }, [id]);

  if (isLoading) {
    return (
      <section className="loading-container">
        <h1 className="loading-text">Loading...</h1>
      </section>
    );
  }

  if (eventDetails.gig) {
    return (
      <div className="container">
        <Header />
        <main>
          <section className="gig-details-container">
            <div className="gig-details-card" key={eventDetails.id}>
              <div className="gig-details-back-container">
                <Link to={"../rehearsals"} className="gig-details-back-link">
                  {`<`}
                </Link>
              </div>
              <div className="gig-details-edit-container">
                <Link to={"/delete"} className="gig-details-delete-link">
                  Delete
                </Link>
                <Link to={"/edit"} className="gig-details-edit-link">
                  Edit
                </Link>
              </div>

              <div className="gig-details-when">
                <p className="gig-details-date">
                  {formatDate(eventDetails.start_time)}
                  {` ${eventDetails.year}`}
                </p>
                <p className="gig-details-time">
                  {`${formatTime(eventDetails.start_time)} - ${formatTime(eventDetails.end_time)}`}
                </p>
              </div>

              <h3 className="gig-details-title">{eventDetails.title}</h3>
              <p className="gig-details-address">
                {eventDetails.street_address}
              </p>
              <p className="gig-details-postcode">{eventDetails.postcode}</p>
              <p className="gig-details-organiser">
                Organiser: {eventDetails.organiser}
              </p>
              <h4 className="gig-details-sub-title">Notes</h4>
              <p className="gig-details-notes">{eventDetails.notes}</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <main>
        <section className="reh-details-container">
          <div className="reh-details-card" key={eventDetails.id}>
            <div className="reh-details-back-container">
              <Link to={"../rehearsals"} className="reh-details-back-link">
                {`<`}
              </Link>
            </div>
            <div className="reh-details-edit-container">
              <Link to={"/delete"} className="reh-details-delete-link">
                Delete
              </Link>
              <Link to={"/edit"} className="reh-details-edit-link">
                Edit
              </Link>
            </div>

            <div className="reh-details-when">
              <p className="reh-details-date">
                {formatDate(eventDetails.start_time)}
                {` ${eventDetails.year}`}
              </p>
              <p className="reh-details-time">
                {`${formatTime(eventDetails.start_time)} - ${formatTime(eventDetails.end_time)}`}
              </p>
            </div>

            <h3 className="reh-details-title">{eventDetails.title}</h3>
            <p className="reh-details-address">{eventDetails.street_address}</p>
            <p className="reh-details-postcode">{eventDetails.postcode}</p>
            <p className="reh-details-organiser">
              Organiser: {eventDetails.organiser}
            </p>
            <h4 className="reh-details-sub-title">Notes</h4>
            <p className="reh-details-notes">{eventDetails.notes}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ViewRehearsal;
