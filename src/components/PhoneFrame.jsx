import React from "react";

const PhoneFrame = () => (
  <section className="app-bg hero-bg section-padding">
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <iframe
          src="https://periodcalcsfair2019.netlify.app/"
          title="App Preview"
          frameBorder="0"
          allow="clipboard-read; clipboard-write; encrypted-media; fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default PhoneFrame;
