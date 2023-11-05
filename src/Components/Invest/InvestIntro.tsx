import React from "react";
import "../styles/introInvest.css";
import NavBar from "../Top-Bottom/NavBar";

// This component displays the navigation bar and introduction to the Invest page
interface DataItem {
  heading: string;
  description: string;
}

const data: DataItem[] = [
  {
    heading: "Trade, not aid",
    description: "Southern innovations addressing global problems."
  }
];

const IntroInvest: React.FC<{}> = () => {
  return (
    <div className="intro-invest">
      <NavBar />
      {data.map((item, index) => (
      <div key={index} className="intro-invest-content">
        <h3>{item.heading}</h3>
        <h1>{item.description}</h1>
      </div>
      ))}
    </div>
  );
};

export default IntroInvest;
