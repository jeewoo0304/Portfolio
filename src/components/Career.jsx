import React from 'react'
import './Career.css'

function Career() {
  // 경력 데이터 (실제 데이터로 교체 필요)
  const careerData = {
    education: {
      institution: '웹퍼블리싱 교육원',
      period: '2020.01 - 2020.06',
      description: '웹퍼블리싱 전문 과정 수료'
    },
    academic: {
      school: 'OO대학교',
      major: '컴퓨터공학과',
      period: '2015.03 - 2019.02',
      degree: '학사'
    },
    careers: [
      {
        company: '회사명 1',
        period: '2020.07 - 2022.12',
        position: '웹퍼블리셔',
        description: '반응형 웹사이트 제작 및 유지보수'
      },
      {
        company: '회사명 2',
        period: '2023.01 - 2024.06',
        position: '시니어 웹퍼블리셔',
        description: '프론트엔드 개발 및 팀 리딩'
      },
      {
        company: '회사명 3',
        period: '2024.07 - 현재',
        position: '웹퍼블리셔',
        description: '모던 웹사이트 제작 및 최적화'
      }
    ]
  }

  return (
    <div className="bento-item career">
      <h2 className="section-title">경력 & 기술</h2>
      
      <div className="career-section">
        <h3 className="subsection-title">교육</h3>
        <div className="career-item">
          <div className="career-header">
            <span className="career-name">{careerData.education.institution}</span>
            <span className="career-period">{careerData.education.period}</span>
          </div>
          <p className="career-description">{careerData.education.description}</p>
        </div>
      </div>

      <div className="career-section">
        <h3 className="subsection-title">학력</h3>
        <div className="career-item">
          <div className="career-header">
            <span className="career-name">{careerData.academic.school}</span>
            <span className="career-period">{careerData.academic.period}</span>
          </div>
          <p className="career-description">
            {careerData.academic.major} ({careerData.academic.degree})
          </p>
        </div>
      </div>

      <div className="career-section">
        <h3 className="subsection-title">경력</h3>
        {careerData.careers.map((career, index) => (
          <div key={index} className="career-item">
            <div className="career-header">
              <span className="career-name">{career.company}</span>
              <span className="career-period">{career.period}</span>
            </div>
            <p className="career-position">{career.position}</p>
            <p className="career-description">{career.description}</p>
          </div>
        ))}
      </div>

      <div className="career-section">
        <h3 className="subsection-title">기술 스택</h3>
        <div className="skills-grid">
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">SCSS</span>
          <span className="skill-tag">Git</span>
        </div>
      </div>
    </div>
  )
}

export default Career

