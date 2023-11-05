import React from "react";
import "../styles/mapLocation.css";
import Button from "../Top-Bottom/Button";

interface DataItem {
  heading: string;
  description1: string;
  description2: string;
}

const data: DataItem[] = [
  {
    heading: "How to get there",
    description1: "Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.",
    description2: "Not in town? Teams, Meets or Zoom are our second name. Book an appointment today via contact@elewa.ke!"
  }
];

// This component displays the map location
const MapLocation: React.FC<{}> = () => {
  return (
    <div className="map-section">
      <div className="map-container">
        <div className="map-content">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8590813614396!2d36.80226837501316!3d-1.256415198731624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171ef5b4adf7%3A0x6a631a5a40e1cfee!2sThe%20Promenade!5e0!3m2!1sen!2ske!4v1699052397558!5m2!1sen!2ske"
              width="500"
              height="500"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {data.map((item, index) => (
          <div key={index} className="map-statement">

            <h2>{item.heading}</h2>
            <p>
           {item.description1}
            </p>
            <br />
            <p>
           {item.description2}
            </p>
            <div className="btn-shared">
              <Button />
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
