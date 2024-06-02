import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "./AddRehearsal.scss";
import axios from "axios";

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

import { BACKEND_URL } from "../../constants/constants.js";

function ViewRehearsal() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="reh-details-container">
          <div className="">
            <div className="">
              <h2 className="">Add Rehearsal</h2>
              <form className="">
                <div>
                  <label className="" htmlFor="title">
                    Title
                  </label>
                  <input
                    className=""
                    id="title"
                    placeholder="Enter rehearsal title"
                    required
                    type="text"
                  />
                </div>
                <div className="">
                  <div>
                    <label className="" htmlFor="">
                      Start Timestamp
                    </label>
                    <input
                      className=""
                      id="start-timestamp"
                      required
                      type="datetime-local"
                    />
                  </div>
                  <div>
                    <label className="" htmlFor="end-timestamp">
                      End Timestamp
                    </label>
                    <input
                      className=""
                      id="end-timestamp"
                      required
                      type="datetime-local"
                    />
                  </div>
                </div>
                <div>
                  <label className="" htmlFor="location-street">
                    Location Street Name
                  </label>
                  <input
                    className=""
                    id="location-street"
                    placeholder="Enter location street name"
                    required
                    type="text"
                  />
                </div>
                <div className="">
                  <div>
                    <label className="" htmlFor="location-postcode">
                      Location Postcode
                    </label>
                    <input
                      className=""
                      id="location-postcode"
                      placeholder="Enter location postcode"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="" htmlFor="plan">
                    Notes
                  </label>
                  <textarea
                    className=""
                    id="plan"
                    placeholder="Enter a rehearsal plan"
                    required
                    rows={3}
                  />
                </div>
                <button className="" type="submit">
                  Add Rehearsal
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ViewRehearsal;
