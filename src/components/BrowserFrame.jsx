import React from "react";

const BrowserFrame = ({ url, title, showUrl = false }) => (
  <section className="app-bg hero-bg section-padding">
    <div className="browser-frame">
      <div className="browser-header">
        <div className="browser-buttons">
          <div className="browser-button"></div>
          <div className="browser-button"></div>
          <div className="browser-button"></div>
        </div>
        {showUrl && <div className="browser-url">{url}</div>}
      </div>
      <div className="browser-screen">
        <iframe
          src={url}
          title={title}
          frameBorder="0"
          allow="clipboard-read; clipboard-write; encrypted-media; fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default BrowserFrame;
