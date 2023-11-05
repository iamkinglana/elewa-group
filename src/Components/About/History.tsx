import React, { useState } from "react";
import "../styles/history.css";
import historydetails from "./history.json";
import { FaCircle } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// This component displays a carousel of the company's history
const HistoryCarousel: React.FC<{}> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // This function handles clicks on the next button
  const nextAchievement = () => {
    if (currentIndex + itemsPerPage < historydetails.length - 1) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // This function handles clicks on the previous button
  const previousAchievement = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // This variable contains the subset of the history array that is currently visible
  const visibleAchievements = historydetails.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // Render the carousel
  return (
    <div className="history-carousel">
      <div className="history-container">
        <h1>Our history</h1>
        <div className="carousel-slides">
          {visibleAchievements.map((achievement, index) => (
            <div key={index} className={`carousel-slide ${index === currentIndex ? "active" : ""}`}>
              <div className="carousel-content">
                <FaCircle />
                <h3>{achievement.year}</h3>
                <h2>{achievement.event}</h2>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="navi-btns">
          <button
            className="previous-button"
            onClick={previousAchievement}
            disabled={currentIndex === 0}
          >
            <BsArrowLeftCircle />
          </button>
          <button
            className="next-button"
            onClick={nextAchievement}
            disabled={currentIndex === historydetails.length - 1}
          >
            <BsArrowRightCircle />
          </button>
        </div>
        <div className="learn-elewa">
          <h1>Learn more about</h1>
          <a href="https://www.elewa.com/" target="_blank" rel="noopener noreferrer">
            Elewa's social impact.
          </a>
        </div>
      </div>
    </div>
  );
};

export default HistoryCarousel;
