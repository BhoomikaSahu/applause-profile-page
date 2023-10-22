import React, { useEffect, useState } from "react";
import Image from "../images/image.png";
import Slider from "react-slick";

const UpcomingEvent = () => {
  const [UpcomingEventsData, setUpcomingEventsData] = useState([]);
  const settings = {
    dots: true,
    // className: "center",
    //   centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2
  };
  const API =
    "https://grayjay.applause.stream/v1/events?isUpcoming=true&pagelength=10&sortBy=recurrence.startTime%2Crecurrence.endTime";

  const fetchAPIUpcomingEvents = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUpcomingEventsData(data.events);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAPIUpcomingEvents(API);
  }, []);

  return (
    <div className="Slider">
      {UpcomingEventsData.length ? (
        <Slider {...settings}>
          {UpcomingEventsData.map((event) => {
            return (
              <div className="Margin-top-20px" key={event.eventUniqueId}>
                <div className="LandingImage">
                  <img src={event.info.assets[0].media.uri} alt="image" />
                </div>
                <div className="EventDetails Margin-top-20px">
                  <div>{event.info.name}</div>
                  <div>
                    {event.paidEvent ? "Paid" : "Free"}{"   "}
                    {event.recurrence.startTime}
                  </div>
                  <button className="Button">Performance</button>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <p className="Gray">No events coming up</p>
      )}
    </div>
  );
};

export default UpcomingEvent;
