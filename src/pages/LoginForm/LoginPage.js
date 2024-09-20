import React, { useState } from "react";
import "../../styles/styles.css";
import SocialMediaButtons from "../components/SocialMediaButtons/SocialMediaButtons";
import LeftArrow from "../../assets/LeftArrow";
import RightArrow from "../../assets/RightArrow";
import backgroundImage from "../../assets/background.png";
import StarComponent from "../components/StarComponent/StarComponent";
import { slides } from "../../data/slideData";
import { LOGIN_ENUM } from "../enum/loginEnum";
import InputBox from "../components/InputBox/InputBox";
import AvatarGroup from "../components/AvatarGroup/AvatarGroup";
const LoginPage = () => {
  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRightArrowClicked, setIsRightArrowClicked] = useState(true);
  const [isLeftArrowClicked, setIsLeftArrowClicked] = useState(false);
  //Image URL
  const avatars = [
    { src: "https://picsum.photos/30?random=3", alt: "Avatar 1" },
    { src: "https://picsum.photos/30?random=2", alt: "Avatar 2" },
    { src: "https://picsum.photos/30?random=1", alt: "Avatar 3" },
  ];
  // Handler for right arrow click
  const handleRightArrowClick = () => {
    setIsRightArrowClicked(true);
    setIsLeftArrowClicked(false);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Move to the next slide
  };

  // Handler for left arrow click
  const handleLeftArrowClick = () => {
    setIsLeftArrowClicked(true);
    setIsRightArrowClicked(false);
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    ); // Move to the previous slide
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <h2 className="habu-text">{LOGIN_ENUM.hubuTitle}</h2>
          <p className="enter-your-account">{LOGIN_ENUM.pleaseEnterAccount}</p>
          <div className="form">
            {/* Using InputBox component for email */}
            <InputBox
              label={LOGIN_ENUM.email}
              type="email"
              placeholder="Enter your email"
              defaultValue="Johndoe@gmail.com"
            />
            {/* Using InputBox component for password */}
            <InputBox
              label={LOGIN_ENUM.password}
              type="password"
              placeholder="Password"
            />
            <div className="forget-password-container">
              <a href="#" className="forgot-password">
                {LOGIN_ENUM.forgotPass}
              </a>
            </div>
            <button type="submit" className="sign-in-button">
              {LOGIN_ENUM.signIn}
            </button>
            <div className="social-icons">
              <SocialMediaButtons />
            </div>
            <div className="create-account-container">
              <a href="#" className="create-account">
                {LOGIN_ENUM.createAccount}
              </a>
            </div>
          </div>
        </div>

        <div className="quote-section">
          <div className="quote-sub-section">
            <h3 className="what-our-text">{LOGIN_ENUM.whatSaid}</h3>
            <h3 className="double-quotes">“</h3>
            <p className="search-text">“{slides[currentSlide].quoteLineOne}”</p>
            <p className="search-text">{slides[currentSlide].quoteLineTwo}”</p>

            <p className="author">{slides[currentSlide].author}</p>
            <p className="position">{slides[currentSlide].position}</p>
            <img
              src={backgroundImage}
              className="background-star"
              alt="background"
            />
            <div className="navigation-buttons">
              {/* Left Arrow */}
              <button
                className="nav-button"
                style={{
                  backgroundColor: isLeftArrowClicked ? "#10281b" : "#fff",
                }}
                onClick={handleLeftArrowClick}
              >
                <div className="arrow">
                  {" "}
                  <LeftArrow color={isLeftArrowClicked ? "#fff" : "#232326"} />
                </div>
              </button>

              {/* Right Arrow */}
              <button
                className="nav-button"
                style={{
                  backgroundColor: isRightArrowClicked ? "#10281b" : "#fff", // Change to black when clicked
                }}
                onClick={handleRightArrowClick}
              >
                <div className="arrow">
                  {" "}
                  <RightArrow
                    color={isRightArrowClicked ? "#fff" : "#232326"}
                  />
                </div>
              </button>
            </div>
            <StarComponent />
            <div className="apply-now">
              <div className="footer-container">
                <div>
                  <h4 className="get-your-text">
                    {LOGIN_ENUM.getYourRight} <br /> place apply now
                  </h4>

                  <p className="be-among-text">{LOGIN_ENUM.beAmongThe}</p>
                </div>
                <AvatarGroup avatars={avatars} extraCount={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
