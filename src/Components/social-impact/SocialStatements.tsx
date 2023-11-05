import React from "react";
import "../styles/social-css/socialStatements.css";

// Displays the statements section that has images and texts
const SocialStatements: React.FC<{}> = () => {
  return (
    <div className="social-statements-sec">
      <div className="social-statements-container">
        <div className="social-statements-content">
          <div className="social-statements-text">
            <h1>A cooperative mindset</h1>
            <p>
              Elewa has one shared objective; To unlock the true potential of
              individuals, teams, and the community. We believe strongly in the
              power of sharing ideas and continuously strive to grow each other
              and ourselves. Internally, but also within the larger communities
              in which we are active.
            </p>
          </div>
          <div className="social-statements-img">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="social-statements-content2">
        <div className="social-statements-img2">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
              alt=""
            />
          </div>
          <div className="social-statements-text2">
            <h1>Beyond business</h1>
            <p>
            Through projects such as our coding school in Kakuma refugee camp,
            training teachers in pastoral Samburu and our open-source coding
            initiatives providing entry-level opportunities to hundreds of
            junior engineers
          </p>
          <p>
            These projects don't necessarily have an immediate financial return,
            but their impact can be tangibly measured in the long-term.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialStatements;
