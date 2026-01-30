import React, { useRef } from "react";
import "./Experience.css";
import { experienceData, getExperienceTypeLabel, getExperienceTypeClass } from "../data/experience";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Experience = () => {
  const timelineRef = useRef(null);
  useScrollReveal(timelineRef, ".timeline-item");

  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <div className="section-container experience-container">
        <h2 id="experience-heading" className="section-title experience-section-title">
          Experience
        </h2>

        <div ref={timelineRef} className="timeline">
          <div className="timeline-line-vertical" aria-hidden="true" />
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className={`timeline-type ${getExperienceTypeClass(item.type)}`}>
                    {getExperienceTypeLabel(item.type)}
                  </span>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <div className="timeline-description">
                  {item.description.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="timeline-marker">
                <div className="timeline-dot" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
