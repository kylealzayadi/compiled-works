import React from "react";
import screenshotImg from "../assets/screenofchrome.png";
import logApiScreenImg from "../assets/logapiscreeny.png";

const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      label: "LATEST PROJECT",
      title: "Logistics API",
      description: "A foundational logistics API designed to manage inventory, orders, and metrics. It offers core endpoints for essential operations, providing a solid starting point for streamlining logistics tasks.",
      buttonText: "View More",
      bgColor: "#4A90E2",
      icon: "💻",
      image: logApiScreenImg,
      imageClassName: "feature-img-content feature-img-logistics",
      link: "https://github.com/kylealzayadi/logapi"
    },
    {
      id: 2,
      label: "FEATURED",
      title: "Job Scraper",
      description: "A Chrome extension that automatically scrapes and organizes job information from any website, saving job details directly into your Google Sheet for easy tracking and management.",
      buttonText: "Explore",
      bgColor: "#F5A623",
      icon: "🚀",
      image: screenshotImg,
      link: "https://chromewebstore.google.com/detail/domnoppgbdgkmdceednbkickfgoglihk?utm_source=item-share-cb"
    }
  ];

  const handleButtonClick = (event, link) => {
    event.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleCardKeyDown = (event, link) => {
    if (!link) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.open(link, '_blank');
    }
  };

  return (
    <section className="featured-section">
      <h2 className="featured-section-title">Most Recent Backend Projects</h2>
      <div className="featured-container">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`feature-card ${feature.link ? "feature-card-clickable" : ""}`}
            onClick={() => handleCardClick(feature.link)}
            onKeyDown={(event) => handleCardKeyDown(event, feature.link)}
            role={feature.link ? "button" : undefined}
            tabIndex={feature.link ? 0 : undefined}
          >
            <div 
              className="feature-image" 
              style={{ backgroundColor: feature.image ? 'transparent' : feature.bgColor }}
            >
              {feature.image ? (
                <img src={feature.image} alt={feature.title} className={feature.imageClassName || "feature-img-content"} />
              ) : (
                <div className="feature-icon">{feature.icon}</div>
              )}
            </div>
            <div className="feature-content">
              <span className="feature-label">{feature.label}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <button 
                className="feature-button"
                onClick={(event) => handleButtonClick(event, feature.link)}
              >
                {feature.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
