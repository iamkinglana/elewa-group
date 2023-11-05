import React from "react";
import "../styles/social-css/socialLast.css"

// Displays the last section before the footer
const SocialLast: React.FC<{}> = () => {
  return (
    <div className="last-section">
      <div className="last-container">
        <h1>Some of our impact projects</h1>
        <div id="slide-show-container">
          <div id="slide-show">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380443/elewa-group-website/client-logos/ms-adc_y96dms.jpg"
              alt="microsoft"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380412/elewa-group-website/client-logos/Spotlights_7_pplnvm.jpg"
              alt="spotlights"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/Kenya_Scouts_Association_kcoka5.svg"
              alt="kenya=scouts"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/wwf-4-logo-png-transparent_tbkfcq.png"
              alt="panda"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg"
              alt="Rwanda"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png"
              alt="farmbetter"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/it_volk_black_logo_image_iowrws.png"
              alt="volk"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/hoplit-logo_nsryy7.webp"
              alt="client-logo"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/2017-GIZ-Logo_htdnpa.png"
              alt="giz"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/Enabel-logo_afiel7.png"
              alt="Enable"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/syndicyourself_logfo_qiqrex.png"
              alt="sydanic"
            />
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/adc-logo_dgxpul.jpg"
              alt="africa"
            />
          </div>
        </div>
        <a
          href="https://www.elewa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become part of our mission and <br /> <span>join elewa.</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLast;
