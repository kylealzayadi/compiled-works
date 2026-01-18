import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhoneFrame from "./components/PhoneFrame";
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
              for different planets' gravitational pulls.
            </p>
          </div>
          <PhoneFrame />
        </section>

        {/* other sections... */}
      </div>
    </div>
  );
}

export default App;
