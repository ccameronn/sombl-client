import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./AddRehearsal.scss";

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

import { BACKEND_URL } from "../../constants/constants.js";

const groupId = sessionStorage.getItem("groupId");

function ViewRehearsal() {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    gig: false,
    group_id: groupId,
    title: "",
    start_time: "",
    end_time: "",
    month: "",
    year: "",
    street_address: "",
    postcode: "",
    organiser: sessionStorage.getItem("user"),
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventDetails),
      });
      console.log(response);
      alert("Rehearsal successfully added!");
      navigate("/rehearsals");
    } catch (error) {
      alert("Failed to add event, internal error");
      console.error("Error: ", error);
    }
  };

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });

    if (e.target.name === "start_time") {
      const d = new Date(e.target.value);
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      setEventDetails({
        ...eventDetails,
        month: month.toString(),
        year: year.toString(),
        [e.target.name]: e.target.value,
        end_time: e.target.value,
      });
    }
  };

  return (
    <div className="container">
      <Header />
      <main>
        <section className="add-reh__section">
          <div className="add-reh__header">
            <Link to={"../rehearsals"} className="add-reh__back">
              {`<`}
            </Link>
            <h2 className="add-reh__title">Add Rehearsal</h2>
          </div>

          <form className="add-reh__form" onSubmit={handleSubmit}>
            <label className="add-reh__title-label" htmlFor="title">
              Title
            </label>
            <input
              className="add-reh__title-input"
              id="title"
              placeholder="Enter rehearsal title"
              required
              type="text"
              name="title"
              value={eventDetails.title}
              onChange={handleChange}
            />
            <label className="add-reh__start-label" htmlFor="">
              Start Time
            </label>
            <input
              className="add-reh__start-input"
              id="start-timestamp"
              required
              type="datetime-local"
              name="start_time"
              onChange={handleChange}
            />
            <label className="add-reh__end-label" htmlFor="end-timestamp">
              End Time
            </label>
            <input
              className="add-reh__end-input"
              id="end-timestamp"
              required
              type="datetime-local"
              name="end_time"
              value={eventDetails.end_time}
              onChange={handleChange}
            />
            <label className="add-reh__street-label" htmlFor="location-street">
              Location Street Name
            </label>
            <input
              className="add-reh__street-input"
              id="location-street"
              placeholder="Enter location street name"
              required
              type="text"
              name="street_address"
              value={eventDetails.street_address}
              onChange={handleChange}
            />
            <label
              className="add-reh__postcode-label"
              htmlFor="location-postcode"
            >
              Location Postcode
            </label>
            <input
              className="add-reh__postcode-input"
              id="location-postcode"
              placeholder="Enter location postcode"
              required
              type="text"
              name="postcode"
              value={eventDetails.postcode}
              onChange={handleChange}
            />
            <label className="add-reh__notes-label" htmlFor="plan">
              Notes
            </label>
            <textarea
              className="add-reh__notes-input"
              id="plan"
              placeholder="Enter a rehearsal plan"
              required
              rows={10}
              name="notes"
              value={eventDetails.notes}
              onChange={handleChange}
            />
            <div className="buttons-container">
              <Link to={"../rehearsals"} className="cancel">
                {`Cancel`}
              </Link>
              <button className="submit" type="submit">
                + Add Rehearsal
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ViewRehearsal;
