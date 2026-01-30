import { useEffect } from "react";

const DEFAULT_OPTIONS = {
  threshold: 0.15,
  rootMargin: "0px 0px -180px 0px",
  inViewClass: "in-view",
};

/**
 * 컨테이너 내 자식 요소가 뷰포트에 들어올 때 지정 클래스를 붙이는 훅 (한 번만)
 * @param {React.RefObject} containerRef - 관찰할 컨테이너 ref
 * @param {string} itemSelector - 자식 요소 선택자 (예: '.timeline-item')
 * @param {Object} [options] - IntersectionObserver 옵션 및 inViewClass
 */
export function useScrollReveal(containerRef, itemSelector, options = {}) {
  const { threshold, rootMargin, inViewClass } = { ...DEFAULT_OPTIONS, ...options };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(inViewClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
