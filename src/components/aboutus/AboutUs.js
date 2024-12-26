import React from 'react';
import './AboutUs.css';
import nihalphoto from '../image/nihal.jpeg'
import ashiqphoto2 from '../image/ashiq2.jpeg'
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="team-container">
        {/* Teammate 1 */}
        <div className="team-member">
          <img
            src={nihalphoto}
            alt="Teammate 1"
            className="team-member-photo"
          />
          <h2>Nihal Ashraf</h2>
          <p>Role: Developer</p>
          <div className="social-links">
            <a href="https://github.com/FadedMarioGold" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.instagram.com/_nih7l_nil/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        {/* Teammate 2 */}
        <div className="team-member">
          <img
            src={ashiqphoto2}
            alt="Teammate 2"
            className="team-member-photo"
          />
          <h2>Ashiq Hameed</h2>
          <p>Role: Designer</p>
          <div className="social-links">
            <a href="https://github.com/FadedMarioGold" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.instagram.com/ashiqee_77/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="about-us">
  <p>
    We are a team of enthusiastic students driven by a shared passion for technology, innovation, and creativity. With a strong foundation in computer science, we are dedicated to building impactful projects that solve real-world problems.
  </p>
  <p>
    Our journey is fueled by curiosity, teamwork, and the desire to learn and grow continuously. From designing sleek user interfaces to developing efficient back-end systems, we aim to create meaningful experiences through our work.
  </p>
  <p>
    As aspiring developers and designers, we embrace challenges, adapt to emerging technologies, and strive to make a positive difference in the tech community and beyond.
  </p>
  <p>
    Join us on our journey as we transform our ideas into innovative solutions and explore the limitless possibilities of technology!
  </p>
  <div id="ha">
  <p> <bold>Nihal Ashraf & Ashiq Hameed</bold></p>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
