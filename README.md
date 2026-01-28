# 웹퍼블리셔 포트폴리오 사이트

React + Vite 기반의 웹퍼블리셔 포트폴리오 웹사이트입니다.  
인트로 애니메이션, Bento Grid 스타일의 대표 포트폴리오, 필터/더보기가 있는 프로젝트 아카이브를 포함합니다.

## 기술 스택

- **React** 18.x
- **Vite** 5.x
- **CSS** (변수 활용, 반응형, 시맨틱 마크업)

## 기능

- **인트로**: 페이드인 → 중앙 노출 → 왼쪽 이동·축소 후 프로필 섹션 노출
- **프로필**: 이름, 포지션, 이메일(복사), 재직 여부, 주요 스킬, 기술 스택
- **경력/기술**: 타임라인 형태의 교육원·학력·경력 내역
- **포트폴리오**: Bento Grid 형태의 대표 프로젝트(브라보코리아, SC제일은행, 현대카드 M몰 등), 앱/사이트 링크, 전체 아카이브로 이동
- **프로젝트 아카이브**: PC / Mobile / Responsive / App / Finance 필터, 썸네일 확대 모달, Load More
- **연락처**: 이메일, 저작권·Built with 문구

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
  ├── components/
  │   ├── Intro.jsx          # 인트로 애니메이션
  │   ├── Intro.css
  │   ├── Profile.jsx        # 프로필
  │   ├── Profile.css
  │   ├── Experience.jsx     # 경력/학력/교육원 타임라인
  │   ├── Experience.css
  │   ├── Portfolio.jsx      # 대표 포트폴리오 Bento Grid
  │   ├── Portfolio.css      # :root CSS 변수 정의 포함
  │   ├── Archive.jsx        # 프로젝트 아카이브 (필터, 더보기, 모달)
  │   ├── Archive.css
  │   ├── Contact.jsx        # 연락처 푸터
  │   └── Contact.css
  ├── App.jsx
  ├── App.css
  ├── main.jsx
  └── index.css              # 전역 리셋·기본 스타일
```

## 데이터 수정 방법

각 컴포넌트 내부에 하드코딩된 데이터가 있습니다. 아래 파일에서 실제 값으로 교체하세요.

| 파일 | 수정 대상 |
|------|-----------|
| `src/components/Intro.jsx` | 인트로 문구, 이름 |
| `src/components/Profile.jsx` | 이름, 포지션, 이메일, 재직 여부, 스킬 |
| `src/components/Experience.jsx` | 경력·학력·교육원 `experienceData` |
| `src/components/Portfolio.jsx` | 대표 프로젝트 카드 내용, 링크 |
| `src/components/Archive.jsx` | `archiveData` (썸네일, 기간, 기여, 유형, 링크) |
| `src/components/Contact.jsx` | 이메일, 연도, Built with 문구 |

이미지는 `public/`에 두고 경로는 `/파일명` 형태로 사용합니다.  
썸네일 등은 `public/pf/`에 두고 `/pf/파일명`으로 참조합니다.

## 스타일링

- **테마**: 라이트 테마 (`index.css` 배경 `#ffffff`, 텍스트 `#171717`).
- **CSS 변수**: `Portfolio.css`의 `:root`에 `--bg-page`, `--text-main`, `--text-sub`, `--border-color`, `--radius-*`, `--bg-card-*` 등이 정의되어 있으며, Archive·Portfolio·Contact 등에서 사용합니다.
- **레이아웃**: Bento Grid(포트폴리오), 타임라인(경력), 반응형 그리드/리스트(아카이브). Mobile First로 미디어쿼리 구성.

## 개선 권장 사항

- **CSS 변수**: `:root` 변수를 `index.css` 또는 공통 `variables.css`로 옮겨 두고, `Portfolio.css` 등에서는 참조만 하도록 정리하면 유지보수에 유리합니다.
- **아카이브 데이터**: `로니버스 /`, `페이큐 /`, `실비아 /` 등 제목이 비어 있는 항목은 필요 시 보완하는 것을 권장합니다.
- **이미지 확장자**: `hanamoney02.JPG` 등 대문자 확장자는 배포 환경(예: Linux)에서 대소문자 구분으로 문제를 일으킬 수 있으므로 소문자(`.jpg`) 통일을 권장합니다.

## GitHub

```bash
git remote -v
git pull origin main
git push origin main
```
