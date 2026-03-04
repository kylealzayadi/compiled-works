import React from "react";

const ExtensionFrame = ({ title, description, link }) => (
  <section className="app-bg hero-bg section-padding">
    <div className="extension-frame">
      <div className="extension-header">
        <h3>{title}</h3>
      </div>
      <div className="extension-content">
        <div className="extension-icon">
          <svg
            viewBox="0 0 128 128"
            width="80"
            height="80"
            fill="#4285F4"
          >
            <rect width="128" height="128" rx="16" />
            <text
              x="64"
              y="72"
              fontSize="40"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
            >
              JS
            </text>
          </svg>
        </div>
        <p>{description}</p>
        <div className="extension-cta">
          <a href={link} target="_blank" rel="noopener noreferrer" className="cta-button">
            View on Chrome Web Store
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ExtensionFrame;
