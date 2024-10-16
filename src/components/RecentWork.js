import React from 'react';
import '../styles/RecentWork.css'; // CSS file for styling
import Work1 from '../assets/Icon.png';
import Work2 from '../assets/logo.jpeg';
const RecentWork = () => {
  return (
    <div className="recent-work-section" id='projects'>
      <h2>Recent Work</h2>
      <p className="intro-text">
        Check out some of my latest projects during my ongoing programme in Cambrian College.
      </p>

      <div className="recent-work-gallery">
        <div className="work-item">
          <img src={Work1} alt="Work 1" />

          <div className="work-info">
            <h3>Travel Buddy</h3>
            <p>
              A mobile app for planning trips and adventures using Firebase, Twilio and .NET MAUI.
            </p>
            <a href="https://github.com/sushanthapa52/TravelBuddy" target="_blank" rel="noreferrer"><button className="work-btn" ><i className="fab fa-github"></i> GitHub</button></a>
          </div>
        </div>

        <div className="work-item">
          <img src={Work2} alt="Work 2" />
          <div className="work-info">
            <h3>Local Business Explorer</h3>
            <p>
              A platform to help local businesses promote their products and services, featuring a map and event listings.
            </p>
            <a href="https://github.com/sushanthapa52/LocalBusinessExplorer" target="_blank"rel="noreferrer" ><button className="work-btn"><i className="fab fa-github"></i> GitHub</button></a>
          </div>
        </div>

        <div className="work-item">
          <img src={Work2} alt="Work 2" />
          <div className="work-info">
            <h3>Folk Musical Instrument Detection</h3>
            <p>
              A AI model that helps to detect the folk instruments of Nepal.
            </p>
            <a href="https://github.com/sushanthapa52/TravelBuddy" target="_blank" rel="noreferrer"><button className="work-btn"><i className="fab fa-github"></i> GitHub</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
