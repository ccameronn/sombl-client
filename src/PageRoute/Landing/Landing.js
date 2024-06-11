import React from "react";
import { useState, useEffect } from "react";
import "./Landing.scss";
import axios from "axios";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { BACKEND_URL, GROUP_ID } from "../../constants/constants.js";

const fetchGroupDetails = async (id) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/groups/${id}`);
    return response.data[0];
  } catch (error) {
    console.log("Error fetching event details", error);
  }
};

function Landing() {
  // const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [groupDetails, setGroupDetails] = useState([]);
  // SETTING GROUPID ON SESSION STORAGE
  sessionStorage.setItem("groupId", GROUP_ID);
  sessionStorage.setItem("user", "Cameron");
  // hardcoded for now - will need to fetch this info from database after login sequence

  useEffect(() => {
    const loadGroupDetails = async () => {
      setIsLoading(true);
      const groupId = sessionStorage.getItem("groupId");
      const response = await fetchGroupDetails(groupId);
      setGroupDetails(response);
      setIsLoading(false);
    };
    loadGroupDetails();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <Header />
        <main>
          <section className="loading-container">
            <h1 className="loading-text">Loading...</h1>
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
        <section className="group-card-container">
          <div className="group-card">
            <h1 className="group-name">{groupDetails.name}</h1>
            <h2 className="group-description">{groupDetails.description}</h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
