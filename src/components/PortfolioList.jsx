import React, { useState } from 'react'
import './PortfolioList.css'

function PortfolioList({ onSelectPortfolio }) {
  // 포트폴리오 데이터 (실제 데이터로 교체 필요)
  const [portfolios] = useState([
    {
      id: 1,
      title: 'E-commerce 웹사이트',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=E-commerce',
      description: '반응형 쇼핑몰 웹사이트',
      tags: ['React', 'CSS3', '반응형']
    },
    {
      id: 2,
      title: '기업 홈페이지',
      category: '홈페이지',
      thumbnail: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Corporate',
      description: '기업 소개 및 서비스 소개 사이트',
      tags: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 3,
      title: '포트폴리오 사이트',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=Portfolio',
      description: '크리에이터 포트폴리오 웹사이트',
      tags: ['React', 'SCSS', '반응형']
    },
    {
      id: 4,
      title: '뉴스 포털',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/10b981/ffffff?text=News',
      description: '실시간 뉴스 제공 플랫폼',
      tags: ['React', 'TypeScript', '반응형']
    },
    {
      id: 5,
      title: '교육 플랫폼',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Education',
      description: '온라인 강의 플랫폼',
      tags: ['React', 'Node.js', '반응형']
    },
    {
      id: 6,
      title: '의료 예약 시스템',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Medical',
      description: '병원 예약 관리 시스템',
      tags: ['React', 'Firebase', '반응형']
    },
    {
      id: 7,
      title: '음악 스트리밍',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Music',
      description: '음악 스트리밍 서비스',
      tags: ['React', 'API', '반응형']
    },
    {
      id: 8,
      title: '소셜 네트워크',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/84cc16/ffffff?text=Social',
      description: '소셜 미디어 플랫폼',
      tags: ['React', 'GraphQL', '반응형']
    },
    {
      id: 9,
      title: '부동산 플랫폼',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/a855f7/ffffff?text=Real+Estate',
      description: '부동산 중개 플랫폼',
      tags: ['React', 'Map API', '반응형']
    },
    {
      id: 10,
      title: '피트니스 앱',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/f97316/ffffff?text=Fitness',
      description: '운동 관리 웹앱',
      tags: ['React', 'PWA', '반응형']
    },
    {
      id: 11,
      title: '레스토랑 예약',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/14b8a6/ffffff?text=Restaurant',
      description: '레스토랑 예약 시스템',
      tags: ['React', 'CSS3', '반응형']
    },
    {
      id: 12,
      title: '여행 예약 사이트',
      category: '웹앱',
      thumbnail: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Travel',
      description: '여행 상품 예약 플랫폼',
      tags: ['React', 'Payment', '반응형']
    }
  ])

  const [filter, setFilter] = useState('전체')

  const categories = ['전체', '웹앱', '홈페이지']

  const filteredPortfolios = filter === '전체' 
    ? portfolios 
    : portfolios.filter(p => p.category === filter)

  return (
    <div className="bento-item portfolio-list">
      <div className="portfolio-header">
        <h2 className="section-title">포트폴리오</h2>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="portfolio-grid">
        {filteredPortfolios.map(portfolio => (
          <div
            key={portfolio.id}
            className="portfolio-card"
            onClick={() => onSelectPortfolio(portfolio)}
          >
            <div className="portfolio-thumbnail">
              <img src={portfolio.thumbnail} alt={portfolio.title} />
              <div className="portfolio-overlay">
                <span className="view-btn">상세보기</span>
              </div>
            </div>
            <div className="portfolio-info">
              <h3 className="portfolio-title">{portfolio.title}</h3>
              <p className="portfolio-description">{portfolio.description}</p>
              <div className="portfolio-tags">
                {portfolio.tags.map((tag, index) => (
                  <span key={index} className="portfolio-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioList

