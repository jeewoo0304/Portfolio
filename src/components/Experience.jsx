import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      type: "경력",
      title: "퍼블리셔 팀 - 차장",
      company: "디앤디모바일",
      period: "2023.03 - 현재",
      description: "금융권 웹/앱 프로젝트 다수\nSC제일은행, 전북은행, 현대카드, 하나머니, 하나은행, 롯데웰푸드 등 다수",
    },
    {
      type: "학력",
      title: "컴퓨터과학과 - 재학중",
      company: "방송통신대학교",
      period: "2021.08 - 재학중",
      description: "자료구조, 운영체제, 디지털논리회로, 파이썬, 선형대수, 이산수학, HTML5 등 수료",
    },
    {
      type: "경력",
      title: "UX 부문 - 대리",
      company: "아이파트너즈",
      period: "2019.12 - 2023.03",
      description: "국민카드(1년 9개월) 운영-다크모드 제작, 유지보수 등\n현대백화점면세점(1년6개월) 운영-메인페이지 리뉴얼, 명품관 제작, 회사홈페이지 리뉴얼 등",
    },
    {
      type: "교육원",
      title: "웹 퍼블리셔 중급 (javascript&jQuery)",
      company: "더조은컴퓨터아카데미",
      period: "2019.09 - 2019.11",
      description: "HTML, CSS, JavaScript 기반 웹 퍼블리싱 전문 과정 수료",
    },
    {
      type: "경력",
      title: "퍼블리셔 팀 - 과장(팀장)",
      company: "허브디앤씨",
      period: "2017.11 - 2019.05",
      description: "웹/앱/반응형 제작, 웹솔루션 제작, 유지보수, 퍼블리싱 가이드 작업 및 검수, HTML5 교체작업 등\n퍼블팀 면접 및 교육, PM, PL, 인사관리",
    },
    {
      type: "교육원",
      title: "프론트엔드 양성과정",
      company: "그린컴퓨터아카데미",
      period: "2016.11 - 2017.04",
      description: "HTML5, CSS3, JavaScript, PHP, mySQL 기반 프론트엔드 양성과정 수료",
    },
    {
      type: "학력",
      title: "사회사업학과",
      company: "강남대학교",
      period: "2004.03 - 2008.08",
      description: "자원복지개발연구회 부회장 2년 역임\n강남종합사회복지관 자원복지프로그램 진행 2년\n종로종합사회복지관 직장체험 6개월, 월드비전 성남 실습 3개월",
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
          {experienceData.map((item, index) => {
            return (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-content">
                <div className="timeline-header">
                  <span className={`timeline-type ${item.type === "경력" ? "career" : item.type === "학력" ? "education" : "training"}`}>
                    {getTypeLabel(item.type)}
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
                  <div className="timeline-dot"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
