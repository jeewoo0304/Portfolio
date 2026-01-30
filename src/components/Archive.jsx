import React, { useState } from "react";
import "./Archive.css";
import {
  archiveData,
  archiveFilters,
  archiveFilterMap,
  getArchiveTypeBadgeClass,
} from "../data/archive";
import { ExternalLinkIcon } from "./icons";

const Archive = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

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
      <div className="section-container archive-container">
        <header className="archive-section-header">
          <h2 id="archive-heading" className="section-title">
            프로젝트 아카이브
            <span className="archive-section-count">
              (총 {archiveData.length}개)
            </span>
          </h2>
          <p>다양한 프로젝트를 카테고리별로 탐색해보세요.</p>
        </header>

        {/* Filter Bar */}
        <div className="archive-filter-bar" role="tablist">
          {archiveFilters.map((filter) => (
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
              {archiveFilterMap[filter]}
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
                        className={`archive-type-badge ${getArchiveTypeBadgeClass(typeItem)}`}
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
                      <ExternalLinkIcon size={20} />
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
