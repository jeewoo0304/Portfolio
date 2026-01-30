import React from "react";
import "./Contact.css";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { CopyIcon, CheckIcon } from "./icons";
import { EMAIL } from "../data/contact";

const Contact = () => {
  const [copied, copy] = useCopyToClipboard(EMAIL);

  return (
    <footer className="contact-section" aria-labelledby="contact-heading">
      <div className="section-container contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 id="contact-heading" className="section-title contact-section-title">Contact</h2>
            <p className="contact-description">
              프로젝트 문의나 협업 제안이 있으시다면
              <br />
              언제든지 연락주세요.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <div className="contact-email-wrapper">
                  <a href={`mailto:${EMAIL}`} className="contact-link">
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    className="contact-copy-button"
                    onClick={copy}
                    aria-label="이메일 주소 복사"
                  >
                    {copied ? (
                      <CheckIcon size={18} />
                    ) : (
                      <CopyIcon size={18} />
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

