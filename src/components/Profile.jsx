import React, { useState } from "react";
import "./Profile.css";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { CopyIcon, CheckIcon } from "./icons";
import { EMAIL } from "../data/contact";

const profileData = {
  name: "전지우",
  position: "Web Publisher",
  email: EMAIL,
  isEmployed: true,
  skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "React", "Git"],
  mainSkills: [
    "시맨틱 마크업",
    "크로스 브라우징",
    "웹 접근성 (WA 인증마크 획득)",
    "반응형 웹",
    "디자인 시스템 구축",
  ],
};

const Profile = () => {
  const [imageError, setImageError] = useState(false);
  const [copied, copy] = useCopyToClipboard(profileData.email);

  return (
    <section className="profile-section" aria-labelledby="profile-heading">
      <div className="section-container profile-container">
        <h2 id="profile-heading" className="section-title profile-section-title">
          Profile
        </h2>

        <div className="profile-content-wrapper">
          {/* 프로필 사진 영역 */}
          <div className="profile-image-area">
            <div className="profile-image-container">
              {!imageError ? (
                <img
                  src="/profile.png"
                  alt={`${profileData.name} 프로필 사진`}
                  className="profile-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="profile-image-placeholder show">
                  <span
                    className="profile-emoji"
                    role="img"
                    aria-label="프로필"
                  >
                    👤
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 정보 영역 */}
          <div className="profile-info-area">
            <div className="profile-info-content">
              <div className="profile-header">
                <div>
                  <div className="profile-name-wrapper">
                    <h3 className="profile-name">{profileData.name}</h3>
                    <span
                      className={`profile-status ${
                        profileData.isEmployed ? "employed" : "unemployed"
                      }`}
                    >
                      {profileData.isEmployed ? "재직 중" : "구직 중"}
                    </span>
                  </div>
                  <p className="profile-position">{profileData.position}</p>
                </div>
              </div>

              <div className="profile-info-list">
                <div className="profile-info-item">
                  <span className="info-label">이메일</span>
                  <button
                    type="button"
                    className="info-email-button"
                    onClick={copy}
                    aria-label={`이메일 ${profileData.email} 복사하기`}
                  >
                    <span className="email-text">{profileData.email}</span>
                    <span className="copy-icon" aria-hidden="true">
                      {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
                    </span>
                    {copied && (
                      <span className="copy-feedback" aria-live="polite">
                        복사됨
                      </span>
                    )}
                  </button>
                </div>

                <div className="profile-info-item">
                  <span className="info-label">주요 스킬</span>
                  <ul
                    className="profile-skills-list"
                    role="list"
                    aria-label="주요 스킬 목록"
                  >
                    {profileData.mainSkills.map((skill, index) => (
                      <li
                        key={index}
                        className="profile-skill-item"
                        role="listitem"
                      >
                        <span className="profile-skill-icon" aria-hidden="true">
                          ✓
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="profile-info-item">
                  <span className="info-label">기술 스택</span>
                  <div
                    className="skills-container"
                    role="list"
                    aria-label="사용 가능한 기술 스택"
                  >
                    {profileData.skills.map((skill, index) => (
                      <span key={index} className="skill-tag" role="listitem">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
