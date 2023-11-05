import React from "react";
import "../styles/mission.css";
import { BsInfinity } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

interface DataItem {
  heading1: string;
  description1: string;
  heading2: string;
  description2: string;
  heading3: string;
  description3: string;
}

const data: DataItem[] = [
  {
    heading1: "Holistic solutions",
    description1: "We go beyond a simple patch-up but develop lasting solutions through holistic design.",
    heading2: "Impact",
    description2: "Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.",
    heading3: "Open data",
    description3: "Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects."
  }
];
// This component displays the mission section
const Mission: React.FC<{}> = () => {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h1>We Care!</h1>
        <div className="mission-statements">
          <p className="first-statement">
            Elewa is a mission-driven organization. We make use of our
            cooperative and shared culture to drive the needle for the
            development of people and environment. We care about our growth, but
            also care deeply about the context surrounding us.
          </p>
          <p className="second-statement">
            Our investments are therefore not limited to internal ones, but
            contribute heavily to our community and environment. From training
            the next scout leaders on sustainable practices, to bridging the
            employment gap for junior software developers.
          </p>
        </div>
        {data.map((item, index) => (
        <div key={index} className="mission-icons">

            <div className="icon1">
                <span><BsInfinity /> </span>
                {/*Heading1*/}
                <h2>{item.heading1}</h2>
                {/*Description1*/}
                <p>{item.description1}</p>
            </div>
            <div className="icon2">
                <span><FiUsers /></span>
                {/*Heading2*/}
                <h2>{item.heading2}</h2>
                {/*Description2*/}
                <p>{item.description2}</p>
            </div>
            <div className="icon3">
                <span><TfiWorld /></span>
                {/*Heading3*/}
                <h2>{item.heading3}</h2>
                {/*Description3*/}
                <p>{item.description3}</p>
            </div>

        </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
