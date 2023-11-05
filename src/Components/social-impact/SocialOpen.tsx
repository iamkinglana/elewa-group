import React from "react";
import "../styles/social-css/socialOpen.css";

// Displays the open source knowledge section
const SocialOpen: React.FC<{}> = () => {
  return (
    <div className="open-section">
      <div className="open-container">
        <div className="open-content">
          <div className="open-text">
            <h1>Open knowledge</h1>
            <p>
              What we learn, we share. Through community events, open knowledge
              repositories, regular teaching moments (everyone a teacher) and
              academic partnerships.
            </p>
            <p>
            We build for today, with a lens on tomorrow.
            </p>
          </div>
          <div className="open-img">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialOpen;
