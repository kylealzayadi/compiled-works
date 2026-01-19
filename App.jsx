import React from "react";
import Navbar from "./Navbar";
import PhoneFrame from "./PhoneFrame";
import "./index.css";

function App() {
  return (
    <div className="app-bg">
      <div className="hero-bg" id="home">
        <Navbar />
        {/* hero content could go here */}
      </div>

      <section id="demo">
        <PhoneFrame />
      </section>

      {/* other sections... */}
    </div>
  );
}

export default App;