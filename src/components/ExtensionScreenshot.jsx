import React from "react";
import screenshotImg from "../assets/screenofchrome.png";

const ExtensionScreenshot = ({ title }) => (
  <section className="app-bg hero-bg section-padding">
    <div className="extension-screenshot-container">
      <div className="extension-screenshot">
        <img src={screenshotImg} alt={title} className="extension-image" />
      </div>
    </div>
  </section>
);

export default ExtensionScreenshot;
