import React, { useState } from 'react';
import '../styles/About.css'; // Assume that this is your CSS file for styling
import sushan from '../assets/sushan.jpeg'


const About = () => {
    // State to toggle the visibility of the extra content
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to handle the button click
    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section id="about" className="about-section">
           
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    {/* Profile Image */}
                    <div className="profile-image">
                        <img src={sushan} alt="Your Name" />
                    </div>

                    {/* Bio Section */}
                    <div className="bio">
                        {/* Initial visible bio content */}
                        <p>
                            Hello! I'm <strong>Sushan Thapa</strong>, a passionate mobile app developer with a focus on creating
                            efficient, user-friendly applications. I'm currently pursuing a <strong>Post-Graduate Certificate in
                                Mobile Application Development</strong> at <strong>Cambrian College</strong>, where I'm gaining advanced
                            skills in modern technologies and platforms like .NET MAUI, React Native, and Firebase.
                        </p>

                        {/* Extra content, shown based on the isExpanded state */}
                        {isExpanded && (
                            <div className="extra-content">
                                <p>
                                    I have a background in front-end development, having worked with technologies such as React,
                                    AngularJS, and React Native. Through my experience, I’ve developed strong skills in building
                                    responsive and dynamic applications. Now, I am focused on leveraging those skills to create robust
                                    mobile applications that solve real-world problems.
                                </p>
                                <p>
                                    In addition to my technical skills, I’m committed to continuous learning and exploring new
                                    technologies. My goal is to work on innovative projects that impact users positively, whether it's
                                    through improving productivity, enhancing communication, or providing seamless user experiences.
                                </p>
                                <p>
                                    If you’re interested in collaborating or want to learn more about my work, feel free to check out my{' '}
                                    <a href="#projects">projects</a> or get in touch via the <a href="#contact">contact</a> section below!
                                </p>
                            </div>
                        )}

                        {/* Toggle button */}
                        <button className="see-more-btn" onClick={toggleContent}>
                            {isExpanded ? 'See Less' : 'See More'}
                        </button>
                    </div>
                </div>
          
        </section>
    );
};

export default About;
