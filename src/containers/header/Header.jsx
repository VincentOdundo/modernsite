import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          The premier African news aggregator site powered by AI
        </h1>
        <p>
          Explore the vibrant and diverse world of African breaking news,
          politics, business, technology, sports and entertainment. NairoBell
          readers are informed and up-to-date on all the latest happenings in
          Africa.
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access in the last 24 Hours</p>
        </div>
      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
