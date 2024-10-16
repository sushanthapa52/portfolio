import React from 'react';
import '../styles/Skill.css'; // CSS file for styling

const Skill = () => {
    return (
        <div>
            {/* <!-- Skills Section --> */}
            <section id="skills" class="skills-section">
                <div>
                    <h2 class="section-title">Skills</h2>

                    <div class="skills-grid">
                        {/* <!-- Languages --> */}
                        <div class="skills-category">
                            <h3>Languages</h3>
                            <ul>
                                <li>C#</li>
                                <li>Java</li>
                                <li>Swift</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                            </ul>
                        </div>

                        {/* <!-- Frameworks --> */}
                        <div class="skills-category">
                            <h3>Frameworks</h3>
                            <ul>
                                <li>.NET MAUI</li>
                                <li>React Native</li>
                                <li>AngularJS</li>
                                <li>Firebase</li>
                                <li>Node.js</li>
                            </ul>
                        </div>

                        {/* <!-- Tools --> */}
                        <div class="skills-category">
                            <h3>Tools</h3>
                            <ul>
                                <li>GitHub</li>
                                <li>Figma</li>
                                <li>Azure DevOps</li>
                                <li>Visual Studio</li>
                                <li>Android Studio</li>
                            </ul>
                        </div>

                        {/* <!-- Platforms --> */}
                        <div class="skills-category">
                            <h3>Platforms</h3>
                            <ul>
                                <li>iOS</li>
                                <li>Android</li>
                                <li>Windows</li>
                                <li>Web Apps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skill;

