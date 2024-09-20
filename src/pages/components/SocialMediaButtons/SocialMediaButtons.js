import React from "react";
import "./SocialMediaButtons.css";
const SocialMediaButtons = () => {
  return (
    <div>
      {/* Social Media Buttons */}
      <div className="wrapper">
        {/* Facebook Button */}
        <a href="#" className="icon facebook">
          <div className="tooltip">Facebook</div>
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </a>

        {/* GitHub Button */}
        <a href="#" className="icon github">
          <div className="tooltip">Github</div>
          <span>
            <i className="fab fa-github"></i>
          </span>
        </a>

        {/* Google Button */}
        <a href="#" className="icon google">
          <div className="tooltip">Google</div>
          <span>
            <i className="fab fa-google"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
