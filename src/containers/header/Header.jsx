import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/Medicine Box.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          MediFor7 Your Own Medication Manager
        </h1>
        <p>
          Our Mission  Is To Improve The Lives Of Individuals And Families By Providing A Smart, Reliable, And Affordable Solution For Medication Management.
        </p>

        <div className="gpt3__header-content-people">
          <img src={people} alt="loading" />
          <p>Trusted By 1600+ people </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="loading img" className="glowing-border" />
      </div>
    </div>
  );
};

export default Header;
