import React, { useEffect, useState } from "react";
import "./Intro.css";

const DELAY = {
  fadeIn: 100,
  move: 600,
  shrink: 2100,
  complete: 2500,
};

const Intro = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setIsVisible(true), DELAY.fadeIn);
    const moveTimer = setTimeout(() => setIsMoved(true), DELAY.move);
    const shrinkTimer = setTimeout(() => setIsShrinking(true), DELAY.shrink);
    const profileTimer = setTimeout(() => {
      setIsComplete(true);
      onAnimationComplete?.();
    }, DELAY.complete);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(moveTimer);
      clearTimeout(shrinkTimer);
      clearTimeout(profileTimer);
    };
  }, [onAnimationComplete]);

  return (
    <section
      className="intro-section"
      aria-labelledby="intro-heading"
      data-moved={isMoved}
      data-shrinking={isShrinking}
      data-complete={isComplete}
    >
      <div className="intro-container">
        <h1
          id="intro-heading"
          className={[
            "intro-text",
            isVisible && "visible",
            isMoved && "moved",
            isShrinking && "shrinking",
          ]
            .filter(Boolean)
            .join(" ")}
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
