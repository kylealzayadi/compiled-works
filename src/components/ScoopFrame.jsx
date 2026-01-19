import React from "react";

const ScoopFrame = () => (
  <section className="app-bg hero-bg section-padding">
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <iframe
          src="https://scoopapp.netlify.app/#/login"
          title="Scoop App Preview"
          frameBorder="0"
          allow="clipboard-read; clipboard-write; encrypted-media; fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default ScoopFrame;
