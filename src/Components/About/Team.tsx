// Import React and other necessary libraries
import React, { useState } from "react";
import "../styles/team.css";
import teamDetails from "./team.json";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

// This component displays the team section
const Team: React.FC<{}> = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const itemsPerPage = 5;

  // Define a function to handle clicks on the next button
  const nextSet = () => {
    if (currentStartIndex + itemsPerPage < teamDetails.length) {
      setCurrentStartIndex(currentStartIndex + itemsPerPage);
    }
  };

  // Define a function to handle clicks on the previous button
  const prevSet = () => {
    if (currentStartIndex - itemsPerPage >= 0) {
      setCurrentStartIndex(currentStartIndex - itemsPerPage);
    }
  };

  // Get the subset of the team members array that is currently visible
  const visibleTeamMembers = teamDetails.slice(
    currentStartIndex,
    currentStartIndex + itemsPerPage
  );

  // Render the Team component
  return (
    <div className="Team-section">
      <div className="team-container">
        <h2>
          Team <span>| Management</span>
        </h2>
        <div className="team-members">
          <div className="image-carosel">
            {visibleTeamMembers.map((item, index) => (
              <div className="individual" key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.position}</p>
                <a
                  href={item.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <BiLogoLinkedin />
                  </span>
                </a>
              </div>
            ))}
          </div>
          <div className="nav-btns">
            <span onClick={prevSet}>
              <BsArrowLeftCircle />
            </span>
            <span onClick={nextSet}>
              <BsArrowRightCircle />
            </span>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
