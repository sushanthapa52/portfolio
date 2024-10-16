import '../styles/Portfolio.css';
import sushan from '../assets/sushan.jpeg'
function Main() {
    return (
        <div>
            {/* Main Section */}
            <main className="main-content">
                <div className="intro-text">
                    <h1>Sushan</h1>
                    <p>Hi, I'm Sushan Thapa, a Mobile Application Developer passionate about creating impactful applications</p>
                    <a href='#about'> <button className="cta-button">Let's get started</button></a>

                </div>
                <div className="profile-image">
                    <img src={sushan} alt="Profile" />
                </div>
            </main>
        </div>
    );
}

export default Main;

