import React from "react";
import screenshotImg from "../assets/screenofchrome.png";
import logApiScreenImg from "../assets/logapiscreeny.png";

const GitHubIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.001 12.001 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

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
      link: "https://github.com/kylealzayadi/logapi",
      githubUrl: "https://github.com/kylealzayadi/logapi"
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
      link: "https://chromewebstore.google.com/detail/domnoppgbdgkmdceednbkickfgoglihk?utm_source=item-share-cb",
      githubUrl: "https://github.com/kylealzayadi/job-scraper"
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
              <div className="feature-actions">
                <button 
                  className="feature-button"
                  onClick={(event) => handleButtonClick(event, feature.link)}
                >
                  {feature.buttonText}
                </button>
                {feature.githubUrl && (
                  <a
                    href={feature.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="feature-github-link"
                    title="View on GitHub"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <GitHubIcon className="feature-github-icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
