import React, { useState } from "react";
import "./Archive.css";

const Archive = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  // Portfolio Data (id: 숫자가 클수록 최신, 새 프로젝트는 배열 앞에 추가)
  const archiveData = [
    {
      id: 50,
      title: "우리은행 / 모니모 서비스(예정)",
      period: "신규 구축 6개월",
      contribution: "React, APP, MW",
      type: ["App", "Mobile", "Finance"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 49,
      title: "페이컴즈 / 임금체불방지시스템",
      period: "리뉴얼 구축 2개월",
      contribution: "고객(PC), admin(PC)",
      type: ["PC"],
      thumb: "/pf/paycoms_pc_01.png",
      link: null,
    },
    {
      id: 48,
      title: "SC제일은행 / 모바일 주민등록증 스캔 시스템",
      period: "신규 구축 1개월",
      contribution: "고객 MW, admin(PC)",
      type: ["PC", "Mobile"],
      thumb: "/pf/sc_idv_pc_01.jpeg",
      link: null,
    },
    {
      id: 47,
      title: "디앤디모바일 / 사내그룹웨어 출결 시스템",
      period: "신규 구축 1개월",
      contribution: "고객 MW, admin(PC)",
      type: ["PC", "Mobile", "Responsive"],
      thumb: "/pf/dnd_groupware_pc_01.jpeg",
      link: null,
    },
    {
      id: 46,
      title: "SC제일은행 / 화상상담 시스템 프로젝트",
      period: "신규 구축 6.5개월",
      contribution: "행원 UI(PC), 고객 MW, admin(PC)",
      type: ["PC", "Mobile", "Finance"],
      thumb: "/pf/sc_ras_pc_01.jpeg",
      link: null,
    },
    {
      id: 45,
      title: "전북은행 / 외국인금융플랫폼 브라보코리아",
      period: "신규 구축 6개월",
      contribution: "REACT, JAX, 플랫폼(APP)",
      type: ["Mobile", "App", "Finance"],
      thumb: "/pf/bravokorea.png",
      link: null,
    },
    {
      id: 44,
      title: "현대카드 / M몰 고도화 프로젝트",
      period: "신규 구축 6개월",
      contribution: "모듈 에디터 제작",
      type: ["PC", "App", "Finance"],
      thumb: "/pf/hyundaemmall01.webp",
      link: null,
    },
    {
      id: 43,
      title: "SC제일은행 / 인터넷 뱅킹 웹접근성 향상 프로젝트",
      period: "웹접근성 5개월",
      contribution: "웹접근성 마크 획득",
      type: ["PC", "Finance", "Responsive"],
      thumb: "/pf/standardchartered01.jpeg",
      link: null,
    },
    {
      id: 42,
      title: "하나머니 / 앱 테스트 및 오류수정 지원",
      period: "리뉴얼 3주",
      contribution: "하나머니 앱 리뉴얼",
      type: ["Mobile", "App", "Finance"],
      thumb: "/pf/hanamoney02.JPG",
      link: null,
    },
    {
      id: 41,
      title: "하나은행 / 프로젝트 ONE 마케팅 플랫폼(콘텐츠 뱅크) - 컨텐츠 파트",
      period: "리뉴얼 1.5개월",
      contribution: "직원 BI 시스템",
      type: ["Mobile", "App", "Finance"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 40,
      title: "롯데웰푸드 / 직원 B2B 웹 시스템 구축",
      period: "구축 1개월",
      contribution: "B2B 웹 시스템",
      type: ["PC"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 39,
      title: "하나머니 / 플랫폼 앱",
      period: "개선 3주",
      contribution: "개선, 구축",
      type: ["Mobile", "App", "Finance"],
      thumb: "/pf/hanamoney01.jpg",
      link: null,
    },
    {
      id: 38,
      title: "국민카드 / 금융 웹앱",
      period: "운영 1년9개월",
      contribution: "운영, 유지보수",
      type: ["Mobile", "PC", "Responsive", "App", "Finance"],
      thumb: "/pf/kbcard.png",
      link: null,
    },
    {
      id: 37,
      title: "현대백화점면세점 / 면세점 웹앱",
      period: "운영 1년6개월",
      contribution: "운영, 리뉴얼",
      type: ["Mobile", "PC", "App", "Responsive"],
      thumb: "/pf/hddf-m.png",
      link: null,
    },
    {
      id: 36,
      title: "Darak 360 / 부동산 플랫폼",
      period: "신규 구축 약 3개월",
      contribution: "아랍어 작업",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/mkca_pc_2.png",
      link: null,
    },
    {
      id: 35,
      title: "MIMS / 예약관리 웹솔루션",
      period: "신규 구축 약 5주",
      contribution: "웹 솔루션",
      type: ["PC"],
      thumb: "/pf/mims_solution_1.png",
      link: null,
    },
    {
      id: 34,
      title: "GW English essay center / 학습관리센터",
      period: "신규 구축 약 3주",
      contribution: "PC",
      type: ["PC"],
      thumb: "/pf/gw_pc_3.png",
      link: null,
    },
    {
      id: 33,
      title: "IR GO / 주식정보 웹앱",
      period: "신규 구축 구현 약 1주 / 리뉴얼 약 6주",
      contribution: "신규 PC / 리뉴얼 ",
      type: ["Mobile", "PC", "Responsive", "App", "Finance"],
      thumb: "/pf/irgo_biz_pc_1.png",
      link: null,
    },
    {
      id: 32,
      title: "GLOBAL FM / 금융정보관리 웹솔루션",
      period: "리뉴얼 약 3주",
      contribution: "HTML5 교체 작업",
      type: ["PC", "Finance"],
      thumb: "/pf/ibss_pc_2.png",
      link: null,
    },
    {
      id: 31,
      title: "EVolt / 전기차충전 하이브리드앱",
      period: "신규 구축 약 3주",
      contribution: "차트",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/evolt_pc_2.png",
      link: null,
    },
    {
      id: 30,
      title: "마실장 / 웹",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["PC"],
      thumb: "/pf/msj_pc_03.png",
      link: null,
    },
    {
      id: 29,
      title: "아들에날린 / 웹앱",
      period: "신규 구축 약 2주",
      contribution: "",
      type: ["Mobile", "App"],
      thumb: "/pf/iorora_mb_02.png",
      link: null,
    },
    {
      id: 28,
      title: "Travel Maker / 반응형 웹",
      period: "신규 구축 약 4주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/tm_pc_1.png",
      link: null,
    },
    {
      id: 27,
      title: "브릿지 / 반응형웹",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/bridge_mb_1.png",
      link: null,
    },
    {
      id: 26,
      title: "스마트스코어 / 웹솔루션",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["PC"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 25,
      title: "PONDA / 영카트",
      period: "신규 구축 약 3주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/ponda_pc_02.png",
      link: null,
    },
    {
      id: 24,
      title: "DOTUM / 영카트",
      period: "신규 구축 약 3주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 23,
      title: "대성학원 / 반응형웹",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/dshw_pc_01.png",
      link: null,
    },
    {
      id: 22,
      title: "대한산업보건협회 / 반응형웹",
      period: "신규 구축 약 3주 / 유지보수 6개월",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/kiha_pc_01.png",
      link: null,
    },
    {
      id: 21,
      title: "서울새활용플라자 / 반응형웹",
      period: "신규 구축 약 3주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive", "App"],
      thumb: "/pf/sup_pc_01.png",
      link: null,
    },
    {
      id: 20,
      title: "환경부 통계포털 / 웹앱",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/stat_mb_1.png",
      link: null,
    },
    {
      id: 19,
      title: "보령시 토지관리 / 웹솔루션",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["PC"],
      thumb: "/pf/boryung_pc_1.png",
      link: null,
    },
    {
      id: 18,
      title: "미디어교회 / 반응형웹",
      period: "신규 구축 약 3주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/mediach_pc_2.png",
      link: null,
    },
    {
      id: 17,
      title: "인퍼블릭 / 반응형웹",
      period: "신규 구축 약 4주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/infublic_pc_02.png",
      link: null,
    },
    {
      id: 16,
      title: "원트리즈 / 반응형웹",
      period: "신규 구축 약 2주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 15,
      title: "샤플 / 반응형웹",
      period: "신규 구축 약 4주",
      contribution: "",
      type: ["Mobile", "PC", "App", "Responsive"],
      thumb: "/pf/shapl_pc_1.png",
      link: null,
    },
    {
      id: 14,
      title: "Reborn / 반응형웹",
      period: "신규 구축 약 4주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/reborn_pc_1.png",
      link: null,
    },
    {
      id: 13,
      title: "뉴스젤리 / 웹솔루션",
      period: "신규 구축 약 2주",
      contribution: "",
      type: ["PC"],
      thumb: "/pf/newsjelly_pc_5.png",
      link: null,
    },
    {
      id: 12,
      title: "로니버스 / ",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 11,
      title: "코디몬스터 / 웹앱",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 10,
      title: "팝스웨이브 / 웹앱",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 9,
      title: "온종일 / 반응형웹",
      period: "신규 구축 약 2주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 8,
      title: "올투 / 반응형웹",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 7,
      title: "어소시에 / 반응형웹",
      period: "신규 구축 약 2주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 6,
      title: "드리머리 / 반응형웹",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 5,
      title: "더모음 / 웹교과서",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 4,
      title: "두손기프트 / 영카트",
      period: "신규 구축 약 1년",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 3,
      title: "광고몬스터 / 영카트",
      period: "신규 구축 약 6개월",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 2,
      title: "페이큐 / ",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
    {
      id: 1,
      title: "실비아 / ",
      period: "신규 구축 약 1주",
      contribution: "",
      type: ["Mobile", "PC", "Responsive"],
      thumb: "/pf/no_img.jpg",
      link: null,
    },
  ];

  const filters = ["All", "PC", "Mobile", "Responsive", "App", "Finance"];

  const filterMap = {
    All: "전체",
    PC: "PC",
    Mobile: "모바일",
    Responsive: "반응형",
    App: "앱",
    Finance: "금융",
  };

  const filteredData =
    activeFilter === "All"
      ? archiveData
      : archiveData.filter((item) => {
          return item.type.includes(activeFilter);
        });

  const displayedData = filteredData.slice(0, displayCount);
  const hasMore = displayCount < filteredData.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 10, filteredData.length));
  };

  const getTypeBadgeClass = (type) => {
    const typeMap = {
      PC: "archive-badge-pc",
      Mobile: "archive-badge-mobile",
      Responsive: "archive-badge-responsive",
      App: "archive-badge-app",
      Finance: "archive-badge-finance",
    };
    return typeMap[type] || "";
  };

  const handleThumbnailClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section className="archive-section" aria-labelledby="archive-heading">
      <div className="archive-container">
        <header className="archive-section-header">
          <h2 id="archive-heading">
            프로젝트 아카이브
            <span className="archive-section-count">
              (총 {archiveData.length}개)
            </span>
          </h2>
          <p>다양한 프로젝트를 카테고리별로 탐색해보세요.</p>
        </header>

        {/* Filter Bar */}
        <div className="archive-filter-bar" role="tablist">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`archive-filter-tab ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => {
                if (activeFilter !== filter) {
                  setIsFiltering(true);
                  setTimeout(() => {
                    setActiveFilter(filter);
                    setDisplayCount(6);
                    setTimeout(() => {
                      setIsFiltering(false);
                    }, 50);
                  }, 200);
                }
              }}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filterMap[filter]}
            </button>
          ))}
        </div>

        {/* List Container */}
        <div className="archive-list-container">
          {/* Desktop Header (Table-like) */}
          <div className="archive-list-header archive-list-row">
            <div className="archive-col-thumb">썸네일</div>
            <div className="archive-col-title">프로젝트명</div>
            <div className="archive-col-period">작업기간</div>
            <div className="archive-col-contribution">요약</div>
            <div className="archive-col-type">유형</div>
            <div className="archive-col-link">링크</div>
          </div>

          {/* List Items */}
          <div
            className={`archive-list-items ${isFiltering ? "filtering" : ""}`}
            role="list"
          >
            {displayedData.map((item) => (
              <article
                key={item.id}
                className="archive-list-item archive-list-row"
                role="listitem"
              >
                <div className="archive-col-thumb">
                  <button
                    type="button"
                    className="archive-thumbnail-button"
                    onClick={() => handleThumbnailClick(item)}
                    aria-label={`${item.title} 썸네일 확대 보기`}
                  >
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="archive-thumbnail"
                    />
                  </button>
                </div>
                <div className="archive-col-title">
                  <h3 className="archive-item-title">{item.title}</h3>
                </div>
                <div className="archive-col-period">
                  <span className="archive-period">{item.period}</span>
                </div>
                <div className="archive-col-contribution">
                  <div className="archive-contribution-wrapper">
                    {typeof item.contribution === "number" ? (
                      <>
                        <div className="archive-contribution-bar">
                          <div
                            className="archive-contribution-fill"
                            style={{ width: `${item.contribution}%` }}
                            aria-label={`기여도 ${item.contribution}%`}
                          ></div>
                        </div>
                        <span className="archive-contribution-text">
                          {item.contribution}%
                        </span>
                      </>
                    ) : (
                      <span className="archive-contribution-desc">
                        {item.contribution}
                      </span>
                    )}
                  </div>
                </div>
                <div className="archive-col-type">
                  <div className="archive-type-badges">
                    {item.type.map((typeItem, index) => (
                      <span
                        key={index}
                        className={`archive-type-badge ${getTypeBadgeClass(
                          typeItem
                        )}`}
                      >
                        {typeItem}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="archive-col-link">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="archive-link-icon"
                      aria-label={`${item.title} 링크 열기`}
                    >
                      <svg
                        width="20"
                        height="20"
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
                  ) : (
                    <span className="archive-link-empty" aria-label="링크 없음">
                      -
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination / Load More */}
        {hasMore && (
          <div className="archive-pagination">
            <button
              className="archive-load-more-btn"
              onClick={handleLoadMore}
              aria-label="더 보기"
            >
              Load More +
            </button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="archive-modal-overlay"
          onClick={handleModalBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="archive-modal-title"
        >
          <div className="archive-modal-content">
            <button
              className="archive-modal-close"
              onClick={handleCloseModal}
              aria-label="모달 닫기"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h3 id="archive-modal-title" className="archive-modal-title">
              {selectedImage.title}
            </h3>
            <div className="archive-modal-image-wrapper">
              <img
                src={selectedImage.thumb}
                alt={selectedImage.title}
                className="archive-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Archive;
