import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      type: "경력",
      title: "웹 퍼블리셔",
      company: "회사명",
      period: "2022.01 - 현재",
      description: "웹사이트 퍼블리싱 및 프론트엔드 개발 업무를 담당했습니다.",
    },
    {
      type: "경력",
      title: "주니어 웹 퍼블리셔",
      company: "회사명",
      period: "2020.06 - 2021.12",
      description: "반응형 웹사이트 제작 및 유지보수를 담당했습니다.",
    },
    {
      type: "학력",
      title: "컴퓨터공학과",
      company: "대학교명",
      period: "2016.03 - 2020.02",
      description: "웹 개발 및 컴퓨터 공학 전공",
    },
    {
      type: "교육원",
      title: "웹 퍼블리싱 과정",
      company: "교육원명",
      period: "2019.06 - 2019.12",
      description: "HTML, CSS, JavaScript 기반 웹 퍼블리싱 전문 과정 수료",
    },
  ];

  const getTypeLabel = (type) => {
    switch (type) {
      case "경력":
        return "Career";
      case "학력":
        return "Education";
      case "교육원":
        return "Training";
      default:
        return type;
    }
  };

  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-container">
        <h2 id="experience-heading" className="experience-section-title">
          Experience
        </h2>

        <div className="timeline">
          <div className="timeline-line-vertical"></div>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-type">{getTypeLabel(item.type)}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
