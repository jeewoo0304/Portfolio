import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "jeewoo0304@gmail.com";

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("이메일 복사 실패:", err);
    }
  };

  return (
    <footer className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 id="contact-heading">Contact</h2>
            <p className="contact-description">
              프로젝트 문의나 협업 제안이 있으시다면
              <br />
              언제든지 연락주세요.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <div className="contact-email-wrapper">
                  <a href={`mailto:${email}`} className="contact-link">
                    {email}
                  </a>
                  <button
                    type="button"
                    className="contact-copy-button"
                    onClick={handleEmailCopy}
                    aria-label="이메일 주소 복사"
                  >
                    {copied ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <p className="contact-copyright">
            © 2026 전지우. All rights reserved.
          </p>
          <p className="contact-built-with">
            Built with HTML5, CSS3, JavaScript, React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

