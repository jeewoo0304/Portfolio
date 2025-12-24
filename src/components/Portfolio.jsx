import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-section" aria-labelledby="portfolio-heading">
      <div className="portfolio-container">
        <header className="portfolio-section-header">
          <h2 id="portfolio-heading">포트폴리오</h2>
          <p>
            반응형 웹부터 인터랙티브 UI까지,
            <br />웹 표준과 접근성을 고려한 대표 프로젝트들입니다.
          </p>
        </header>

        <div className="portfolio-bento-grid" role="list">
          {/* 기업 홈페이지 리뉴얼 - Featured Project */}
          <article
            className="portfolio-bento-card portfolio-lg-col-2 portfolio-theme-blue portfolio-featured portfolio-bravo"
            role="listitem"
          >
            <div className="portfolio-card-content">
              <div className="portfolio-featured-header">
                <div className="portfolio-featured-info">
                  <div className="portfolio-featured-title-wrapper">
                    <div className="portfolio-awards-image">
                      <img
                        src="/iawards-aa.jpeg"
                        alt="iAwards 수상"
                        className="portfolio-awards-img"
                      />
                    </div>
                    <h3>브라보코리아</h3>
                  </div>
                  <p className="portfolio-featured-description">
                    전북은행 외국인금융플랫폼 브라보코리아 퍼블리싱
                  </p>
                  <p className="portfolio-featured-description">
                    2025 APP AWARDS 금융연계서비스분야 대상
                  </p>
                  <div className="portfolio-featured-tags">
                    <span className="portfolio-tag-badge">React</span>
                    <span className="portfolio-tag-badge">HTML5</span>
                    <span className="portfolio-tag-badge">CSS3</span>
                    <span className="portfolio-tag-badge">jQuery</span>
                    <span className="portfolio-tag-badge">Jax</span>
                  </div>
                  <div className="portfolio-featured-contribution">
                    <span className="portfolio-contribution-label">앱</span>
                    <span className="portfolio-contribution-label">구축</span>
                    <span className="portfolio-contribution-label">6개월</span>
                  </div>
                </div>
                <div
                  className="portfolio-featured-actions"
                  aria-label="프로젝트 액션"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=kr.co.jbbank.bravokorea&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="브라보코리아 Android 앱 다운로드"
                    className="portfolio-action-link"
                    tabIndex={0}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                    <span>Android</span>
                  </a>
                  <a
                    href="https://apps.apple.com/kr/app/bravo-korea-브라보코리아/id6599448442"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="브라보코리아 iOS 앱 다운로드"
                    className="portfolio-action-link"
                    tabIndex={0}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                    <span>iOS</span>
                  </a>
                </div>
              </div>
              <figure
                className="portfolio-featured-mockup portfolio-featured-mockup-mobile-only"
                aria-hidden="true"
              >
                <div className="portfolio-mockup-device portfolio-mockup-mobile-frame">
                  <div className="portfolio-mockup-screen portfolio-mockup-screen-mobile">
                    <div className="portfolio-mockup-content portfolio-mockup-scroll">
                      <div className="portfolio-mockup-images">
                        <img
                          src="/bravokorea1.webp"
                          alt="브라보코리아 화면 1"
                          className="portfolio-mockup-image"
                        />
                        <img
                          src="/bravokorea2.webp"
                          alt="브라보코리아 화면 2"
                          className="portfolio-mockup-image"
                        />
                        <img
                          src="/bravokorea3.webp"
                          alt="브라보코리아 화면 3"
                          className="portfolio-mockup-image"
                        />
                        <img
                          src="/bravokorea4.webp"
                          alt="브라보코리아 화면 4"
                          className="portfolio-mockup-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </article>

          {/* SC제일은행 */}
          <article
            className="portfolio-bento-card portfolio-lg-col-2 portfolio-theme-orange portfolio-featured portfolio-scbank"
            role="listitem"
          >
            <div className="portfolio-card-content">
              <div className="portfolio-featured-header">
                <div className="portfolio-featured-info">
                  <div className="portfolio-featured-title-wrapper">
                    <div className="portfolio-awards-image">
                      <img
                        src="/wa-scbank.jpeg"
                        alt="웹 접근성 인증"
                        className="portfolio-awards-img"
                      />
                    </div>
                    <h3>SC제일은행</h3>
                  </div>
                  <p className="portfolio-featured-description">
                    SC제일은행 인터넷뱅킹 웹접근성 향상 프로젝트
                  </p>
                  <p className="portfolio-featured-description">
                    한국웹접근성인증평가원 2024.03.15~2025.03.14
                  </p>
                  <div className="portfolio-featured-tags">
                    <span className="portfolio-tag-badge">HTML5</span>
                    <span className="portfolio-tag-badge">CSS3</span>
                  </div>
                  <div className="portfolio-featured-contribution">
                    <span className="portfolio-contribution-label">PC</span>
                    <span className="portfolio-contribution-label">
                      웹 접근성 준수
                    </span>
                    <span className="portfolio-contribution-label">5개월</span>
                  </div>
                </div>
                <div
                  className="portfolio-featured-actions"
                  aria-label="프로젝트 액션"
                >
                  <a
                    href="https://open.standardchartered.co.kr/login/index"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SC제일은행 인터넷뱅킹 사이트 보기"
                    className="portfolio-action-link"
                    tabIndex={0}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                    <span>Visit Site</span>
                  </a>
                </div>
              </div>
              <figure
                className="portfolio-featured-mockup portfolio-featured-mockup-desktop-only"
                aria-hidden="true"
              >
                <div className="portfolio-mockup-device portfolio-mockup-desktop-frame">
                  <div className="portfolio-mockup-screen portfolio-mockup-screen-desktop">
                    <div className="portfolio-mockup-content portfolio-mockup-scroll">
                      <img
                        src="/standardchartered-wa.jpeg"
                        alt="SC제일은행 인터넷뱅킹 웹접근성"
                        className="portfolio-mockup-image portfolio-mockup-image-desktop"
                      />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </article>

          {/* 현대카드 M몰 모듈 에디터 */}
          <article
            className="portfolio-bento-card portfolio-lg-col-2 portfolio-theme-green portfolio-featured portfolio-hyundai"
            role="listitem"
          >
            <div className="portfolio-card-content">
              <div className="portfolio-featured-header">
                <div className="portfolio-featured-info">
                  <div className="portfolio-featured-title-wrapper">
                    <h3>현대카드 M몰</h3>
                  </div>
                  <p className="portfolio-featured-description">
                    현대카드 M몰 고도화 프로젝트 (M몰 모듈 에디터 신규 구축)
                  </p>
                  <div className="portfolio-featured-tags">
                    <span className="portfolio-tag-badge">HTML5</span>
                    <span className="portfolio-tag-badge">SCSS</span>
                    <span className="portfolio-tag-badge">JavaScript</span>
                    <span className="portfolio-tag-badge">jQuery</span>
                  </div>
                  <div className="portfolio-featured-contribution">
                    <span className="portfolio-contribution-label">앱</span>
                    <span className="portfolio-contribution-label">PC</span>
                    <span className="portfolio-contribution-label">구축</span>
                    <span className="portfolio-contribution-label">6개월</span>
                  </div>
                </div>
                <div
                  className="portfolio-featured-actions"
                  aria-label="프로젝트 액션"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hyundaiCard.HyundaiCardMPoint&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="현대카드 M몰 Android 앱 다운로드"
                    className="portfolio-action-link"
                    tabIndex={0}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                    <span>Android</span>
                  </a>
                  <a
                    href="https://apps.apple.com/kr/app/현대카드-m몰/id369502181"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="현대카드 M몰 iOS 앱 다운로드"
                    className="portfolio-action-link"
                    tabIndex={0}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                    <span>iOS</span>
                  </a>
                </div>
              </div>
              <figure
                className="portfolio-featured-mockup portfolio-featured-mockup-mobile-only"
                aria-hidden="true"
              >
                <div className="portfolio-mockup-device portfolio-mockup-mobile-frame">
                  <div className="portfolio-mockup-screen portfolio-mockup-screen-mobile">
                    <div className="portfolio-mockup-content portfolio-mockup-scroll portfolio-mockup-3images">
                      <div className="portfolio-mockup-images">
                        <img
                          src="/hyundaemmall01.webp"
                          alt="현대카드 M몰 화면 1"
                          className="portfolio-mockup-image"
                        />
                        <img
                          src="/hyundaemmall02.webp"
                          alt="현대카드 M몰 화면 2"
                          className="portfolio-mockup-image"
                        />
                        <img
                          src="/hyundaemmall03.webp"
                          alt="현대카드 M몰 화면 3"
                          className="portfolio-mockup-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-mockup-device portfolio-mockup-desktop-frame portfolio-mockup-desktop-behind">
                  <div className="portfolio-mockup-screen portfolio-mockup-screen-desktop">
                    <div className="portfolio-mockup-content portfolio-mockup-scroll">
                      <img
                        src="/hyundaemmall01.webp"
                        alt="현대카드 M몰 PC 버전"
                        className="portfolio-mockup-image portfolio-mockup-image-desktop"
                      />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </article>

          {/* SC제일은행 화상상담 시스템 */}
          <article
            className="portfolio-bento-card portfolio-lg-col-2 portfolio-theme-purple portfolio-featured portfolio-public"
            role="listitem"
          >
            <div className="portfolio-card-content">
              <div className="portfolio-featured-header">
                <div className="portfolio-featured-info">
                  <div className="portfolio-featured-title-wrapper">
                    <h3>화상상담 시스템</h3>
                  </div>
                  <p className="portfolio-featured-description">
                    SC제일은행 화상상담 시스템 프로젝트
                  </p>
                  <div className="portfolio-featured-tags">
                    <span className="portfolio-tag-badge">HTML5</span>
                    <span className="portfolio-tag-badge">CSS3</span>
                    <span className="portfolio-tag-badge">JavaScript</span>
                    <span className="portfolio-tag-badge">jQuery</span>
                  </div>
                  <div className="portfolio-featured-contribution">
                    <span className="portfolio-contribution-label">PC</span>
                    <span className="portfolio-contribution-label">MW</span>
                    <span className="portfolio-contribution-label">admin</span>
                    <span className="portfolio-contribution-label">구축</span>
                    <span className="portfolio-contribution-label">
                      6.5개월
                    </span>
                  </div>
                </div>
                <div
                  className="portfolio-featured-actions"
                  aria-label="프로젝트 액션"
                ></div>
              </div>
              <figure
                className="portfolio-featured-mockup portfolio-featured-mockup-mobile-only"
                aria-hidden="true"
              >
                <div className="portfolio-mockup-device portfolio-mockup-mobile-frame portfolio-mockup-mobile-behind">
                  <div className="portfolio-mockup-screen portfolio-mockup-screen-mobile">
                    <div className="portfolio-mockup-content portfolio-mockup-scroll portfolio-mockup-3images">
                      <div className="portfolio-mockup-images">
                        <img
                          src="/hyundaemmall01.webp"
                          alt="SC제일은행 화상상담 시스템 화면 1"
                          className="portfolio-mockup-image"
                        />
                        <img
                          src="/hyundaemmall02.webp"
                          alt="SC제일은행 화상상담 시스템 화면 2"
                          className="portfolio-mockup-image"
                        />
                        <img
                          src="/hyundaemmall03.webp"
                          alt="SC제일은행 화상상담 시스템 화면 3"
                          className="portfolio-mockup-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-mockup-device portfolio-mockup-desktop-frame portfolio-mockup-desktop-front">
                  <div className="portfolio-mockup-screen portfolio-mockup-screen-desktop">
                    <div className="portfolio-mockup-content portfolio-mockup-scroll">
                      <img
                        src="/hyundaemmall01.webp"
                        alt="SC제일은행 화상상담 시스템 PC 버전"
                        className="portfolio-mockup-image portfolio-mockup-image-desktop"
                      />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </article>

          {/* 전체 포트폴리오 보기 */}
          <article
            className="portfolio-bento-card portfolio-lg-col-2 portfolio-theme-black portfolio-link-card"
            role="listitem"
          >
            <a
              href="#archive"
              className="portfolio-full-link"
              aria-label="전체 포트폴리오 보기"
            >
              <span className="portfolio-link-text">전체 포트폴리오 보기</span>
              <svg
                className="portfolio-arrow-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
