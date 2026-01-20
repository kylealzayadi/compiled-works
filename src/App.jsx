import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhoneFrame from "./components/PhoneFrame";
import BrowserFrame from "./components/BrowserFrame";
import ScoopFrame from "./components/ScoopFrame";
import ProjectLinks from "./components/ProjectLinks";
import StarsCanvas from "./components/StarsCanvas";
import "./index.css";

function App() {
  return (
    <div className="app-bg">
      <StarsCanvas />
      <div className="app-content">
        <Navbar />
        <Hero />

        <section id="demo" className="demo-section">
          <div className="demo-copy">
            <h2>Period Calculator</h2>
            <p>
              A mobile-friendly calculator for cycle timing and next periods that adjusts
              for different planets' gravitational pulls; won the school science fair and advanced to regionals.
            </p>
            <ProjectLinks 
              githubUrl="https://github.com" 
              productionUrl="https://periodcalcsfair2019.netlify.app/"
            />
          </div>
          <PhoneFrame />
        </section>

        <section id="garden" className="demo-section">
          <div className="demo-copy">
            <h2>Genevieve's Garden</h2>
            <p>
              Built this site to serve my church nonprofit that uses donations to feed the unhoused and those struggling with mental health on Hollywood streets every day, rain or shine.
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/genegardenv2" 
              productionUrl="https://genevievesgardenhollywood.com/index.html"
            />
          </div>
          <BrowserFrame 
            url="https://genevievesgardenhollywood.com/index.html" 
            title="Genevieve's Garden"
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
              githubUrl="https://github.com/kylealzayadi?tab=repositories" 
              productionUrl="https://scoopapp.netlify.app/#/login"
            />
          </div>
          <ScoopFrame />
        </section>

        <section id="riordan" className="demo-section">
          <div className="demo-copy">
            <h2>Riordan Scholars Submission</h2>
            <p>
              Built a Bootstrap site during a four-day Riordan Scholars program at UCLA Anderson and presented it in the final competition.
            </p>
            <ProjectLinks 
              githubUrl="https://github.com/kylealzayadi/RiordanScholarsSubmission/settings/pages"
              productionUrl="https://riordan.netlify.app/"
            />
          </div>
          <BrowserFrame 
            url="https://riordan.netlify.app/" 
            title="Riordan Scholars Submission"
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

        {/* other sections... */}
      </div>
    </div>
  );
}

export default App;
