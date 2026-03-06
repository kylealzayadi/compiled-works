import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhoneFrame from "./components/PhoneFrame";
import BrowserFrame from "./components/BrowserFrame";
import ScoopFrame from "./components/ScoopFrame";
import FeaturedSection from "./components/FeaturedSection";
import ProjectLinks from "./components/ProjectLinks";
import StarsCanvas from "./components/StarsCanvas";
import groguButtonArt from "./assets/grogations.png";
import "./index.css";

function App() {
  return (
    <div className="app-bg">
      <StarsCanvas />
      <div className="app-content">
        <Navbar />
        <Hero />

        <FeaturedSection />

        <section id="garden" className="demo-section">
          <div className="demo-copy">
            <h2>Genevieve's Garden</h2>
            <p>
              Built this site to serve my local church nonprofit that uses donations to feed the unhoused and those struggling with mental health on Hollywood streets every day, rain or shine.
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/genegardenv2" 
              productionUrl="https://gghollywood.org/"
            />
          </div>
          <BrowserFrame 
            url="https://gghollywood.org/" 
            title="Genevieve's Garden"
          />
        </section>

        <section id="riordan" className="demo-section">
          <div className="demo-copy">
            <h2>Riordan Scholars Submission</h2>
            <p>
             Compiled a Bootstrap site during a four-day Riordan Scholars program at UCLA Anderson and presented it in the final competition.
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/RiordanScholarsSubmission"
              productionUrl="https://riordan.netlify.app/"
            />
          </div>
          <BrowserFrame 
            url="https://riordan.netlify.app/" 
            title="Riordan Scholars Submission"
          />
        </section>

        <section id="scoop" className="demo-section">
          <div className="demo-copy">
            <h2>Scoop</h2>
            <p>
              An app revolutionizing the way dog owners are incentivized to pick up after their dogs. 
              Earn rewards while keeping your community clean!
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/scoopLime" 
              productionUrl="https://scoopapp.netlify.app/#/login"
            />
          </div>
          <ScoopFrame />
        </section>

        <section id="mentor" className="demo-section">
          <div className="demo-copy">
            <h2>Mentor's Portfolio</h2>
            <p>
              I built this site for my mentor, a talented educator and leader. Explore his portfolio and work, only with the password of course! (Private github repo)
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/nickgift" 
              productionUrl="https://nortega.netlify.app/"
            />
          </div>
          <BrowserFrame 
            url="https://nortega.netlify.app/" 
            title="Nick Ortega's Portfolio"
          />
        </section>

        <section id="portfolio" className="demo-section">
          <div className="demo-copy">
            <h2>First Portfolio</h2>
            <p>
              My first portfolio site, built as a sophomore at UCLA to showcase early projects and experience.
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/portfoliosite"
              productionUrl="https://portfoliosite2024.netlify.app/"
            />
          </div>
          <BrowserFrame 
            url="https://portfoliosite2024.netlify.app/" 
            title="First Portfolio"
          />
        </section>

        <section id="demo" className="demo-section">
          <div className="demo-copy">
            <h2>Period Calculator</h2>
            <p>
              A mobile-friendly calculator for cycle timing and next periods that adjusts
              for different planets' gravitational pulls; won the school science fair and advanced to regionals.
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/PeriodCalculator" 
              productionUrl="https://periodcalcsfair2019.netlify.app/"
            />
          </div>
          <PhoneFrame />
        </section>
      </div>

      <footer className="footer footer-isolated">
        <a
          href="https://kylealzayadi.com"
          className="footer-button"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Grogations"
        >
          <img src={groguButtonArt} alt="Grogations" className="footer-button-art" />
        </a>
        <p className="footer-text">Want to learn more about me?</p>
        <p className="footer-text">Grogu knows the way!</p>
      </footer>
    </div>
  );
}

export default App;
