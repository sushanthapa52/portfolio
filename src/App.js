// import logo from './logo.svg';
import ContactForm from './components/Contact.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import RecentWork from './components/RecentWork.js';
import Footer from './components/Footer.js';
import '../src/styles/Portfolio.css';

function App() {
  return (
    <div>
      <Header />
      
      <About />  

      <Skill />

      <RecentWork />

      <ContactForm />

      <Footer /> 
    </div>
  );
}

export default App;
