import { useState, useCallback, useEffect } from "react";

const RESET_DELAY_MS = 2000;

/**
 * 클립보드 복사 훅
 * @param {string} text - 복사할 텍스트
 * @returns {[boolean, () => Promise<void>]} [copied, copy]
 */
export function useCopyToClipboard(text) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), RESET_DELAY_MS);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  }, [text]);

  return [copied, copy];
}
