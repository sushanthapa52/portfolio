import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
        <p>© 2024 Sushan Thapa. All rights reserved.</p>
        <p>
          Follow me on:
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>Twitter </a> | 
          <a href="https://github.com/sushanthapa52" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub </a> | 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn </a>
        </p>
      </footer>
    )
}

export default Footer;