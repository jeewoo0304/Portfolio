import React, { useEffect, useState, useRef } from "react";
import "./Intro.css";

const Intro = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 초기 페이드인 애니메이션 (0.1초 후)
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // 중앙에 1초 노출 후 왼쪽으로 이동 (1.1초 후)
    const moveTimer = setTimeout(() => {
      setIsMoved(true);
    }, 1100);

    // 왼쪽 이동 완료 후 줄어들면서 상단으로 이동 (약 2.6초 후, 왼쪽 이동 1.5초 후)
    const shrinkTimer = setTimeout(() => {
      setIsShrinking(true);
    }, 1850);

    // 이동 애니메이션 완료 후 프로필 섹션 표시 (줄어들기 1.5초 후)
    const profileTimer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 1800);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(moveTimer);
      clearTimeout(shrinkTimer);
      clearTimeout(profileTimer);
    };
  }, [onAnimationComplete]);

  return (
    <section
      ref={sectionRef}
      className="intro-section"
      aria-labelledby="intro-heading"
      data-moved={isMoved}
      data-shrinking={isShrinking}
    >
      <div ref={containerRef} className="intro-container">
        <h1
          ref={textRef}
          id="intro-heading"
          className={`intro-text ${isVisible ? "visible" : ""} ${
            isMoved ? "moved" : ""
          } ${isShrinking ? "shrinking" : ""}`}
        >
          <span className="intro-line">
            환경에 맞추고, 소통하며, 결과로 증명하는
          </span>
          <span className="intro-line">
            <span className="intro-name">웹 퍼블리셔 전지우</span>입니다.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Intro;
