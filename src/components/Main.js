import React from "react";
import Image from "../images/image.png";
import Verified from "../images/Verified.png";
import Location from "./Location";
import UpcomingEvent from "./UpcomingEvent";

const Main = () => {
  return (
    <div className="Main">
      {/* <div className="MainContainer"> */}
      <div className="MainAvtar Avtar">MJ</div>
      <h1 className="ArtistName">
        Matt Jaffe <img src={Verified} alt="Verified" />
      </h1>
      <h3 className="ArtistUsername">@MattJaffe</h3>
      <div className="Margin-26px">
        <button className="Button Button-color-yellow Margin-right-20px Margin-top-20px">
          Follow
        </button>
        <button className="Button">Share Profile</button>
      </div>
      <div className="Row Margin-top-35px">
        <span>Matt</span>
        <span className="Gray">hasn't set their status yet</span>
      </div>
      <Location />
      <div className="ApplausCommunity">
        <div>
          <h1>Applause Community</h1>
          <p>Matt Jaffe joined Applause in July 2021.</p>
        </div>
      </div>
      <div className="UpcomingEvents">
        <h2>Upcoming Events</h2>
        <UpcomingEvent />
      </div>
      <div>
        <button className="Button Margin-top-35px">
          Ask Creator to host Event
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Main;
