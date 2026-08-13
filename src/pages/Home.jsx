import resume from "../assets/Swathi_Resume.pdf";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page hero-page">
      <div className="hero-content">
        <p className="tag">HELLO, I'M</p>

        <h1>Koppolu Swathi</h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="hero-description">
          A curious and dedicated student interested in technology,
          frontend development and continuous learning.
        </p>

        <div className="hero-buttons">
  <Link to="/projects" className="button filled">
    View Projects
  </Link>

  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="button outline"
  >
    Download Resume
  </a>
</div>

        <div className="social-links">
          <a
            href="https://github.com/swathikoppolu0001-ship-it"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/swathi-koppolu-76114537b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="intro-card">
        <div className="initials">KS</div>
        <p>LEARNING • BUILDING • GROWING</p>
      </div>
    </section>
  );
}

export default Home;