import React, { useState } from 'react'
import './PortfolioDetail.css'

function PortfolioDetail({ portfolio, onClose }) {
  const [deviceView, setDeviceView] = useState('desktop')

  // 실제 데이터로 교체 필요
  const portfolioDetail = {
    ...portfolio,
    images: {
      desktop: portfolio.thumbnail,
      tablet: portfolio.thumbnail,
      mobile: portfolio.thumbnail
    },
    liveUrl: '#',
    githubUrl: '#',
    fullDescription: '프로젝트에 대한 상세한 설명이 들어갑니다. 사용한 기술 스택, 주요 기능, 개발 과정 등을 설명합니다.'
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">{portfolioDetail.title}</h2>
          <p className="modal-category">{portfolioDetail.category}</p>
        </div>

        <div className="device-selector">
          <button
            className={`device-btn ${deviceView === 'desktop' ? 'active' : ''}`}
            onClick={() => setDeviceView('desktop')}
          >
            PC
          </button>
          <button
            className={`device-btn ${deviceView === 'tablet' ? 'active' : ''}`}
            onClick={() => setDeviceView('tablet')}
          >
            Tablet
          </button>
          <button
            className={`device-btn ${deviceView === 'mobile' ? 'active' : ''}`}
            onClick={() => setDeviceView('mobile')}
          >
            Mobile
          </button>
          <button
            className={`device-btn ${deviceView === 'responsive' ? 'active' : ''}`}
            onClick={() => setDeviceView('responsive')}
          >
            Responsive
          </button>
        </div>

        <div className="preview-container">
          {deviceView === 'responsive' ? (
            <div className="responsive-preview">
              <div className="device-frame desktop-frame">
                <div className="device-content">
                  <img src={portfolioDetail.images.desktop} alt="Desktop" />
                </div>
              </div>
              <div className="device-frame tablet-frame">
                <div className="device-content">
                  <img src={portfolioDetail.images.tablet} alt="Tablet" />
                </div>
              </div>
              <div className="device-frame mobile-frame">
                <div className="device-content">
                  <img src={portfolioDetail.images.mobile} alt="Mobile" />
                </div>
              </div>
            </div>
          ) : (
            <div className={`device-frame ${deviceView}-frame`}>
              <div className="device-content">
                <img src={portfolioDetail.images[deviceView]} alt={deviceView} />
              </div>
            </div>
          )}
        </div>

        <div className="modal-body">
          <div className="project-info">
            <h3>프로젝트 설명</h3>
            <p>{portfolioDetail.fullDescription}</p>
          </div>

          <div className="project-tags">
            <h3>사용 기술</h3>
            <div className="tags-list">
              {portfolioDetail.tags.map((tag, index) => (
                <span key={index} className="tag-item">{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-links">
            <a href={portfolioDetail.liveUrl} target="_blank" rel="noopener noreferrer" className="link-btn live">
              라이브 사이트
            </a>
            <a href={portfolioDetail.githubUrl} target="_blank" rel="noopener noreferrer" className="link-btn github">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetail

