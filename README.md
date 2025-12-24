# 웹퍼블리셔 포트폴리오 사이트

Bento Grid 스타일의 React 기반 포트폴리오 웹사이트입니다.

## 기능

- **프로필 섹션**: 이름, 이메일, 경력, 재직여부 등 개인 정보 표시
- **경력/기술 섹션**: 교육원, 학력, 경력 내역, 기술 스택 표시
- **포트폴리오 리스트**: 작업한 웹앱/홈페이지를 그리드 형태로 표시
- **포트폴리오 상세**: PC, Tablet, Mobile, Responsive 뷰 확인 가능

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
  ├── components/
  │   ├── Profile.jsx          # 프로필 컴포넌트
  │   ├── Profile.css
  │   ├── Career.jsx           # 경력/기술 컴포넌트
  │   ├── Career.css
  │   ├── PortfolioList.jsx    # 포트폴리오 리스트
  │   ├── PortfolioList.css
  │   ├── PortfolioDetail.jsx  # 포트폴리오 상세 모달
  │   └── PortfolioDetail.css
  ├── App.jsx                  # 메인 앱 컴포넌트
  ├── App.css                  # Bento Grid 스타일
  ├── main.jsx                 # 진입점
  └── index.css                # 전역 스타일
```

## 데이터 수정 방법

각 컴포넌트 파일에서 하드코딩된 데이터를 실제 데이터로 교체하세요:

- `src/components/Profile.jsx`: 프로필 정보
- `src/components/Career.jsx`: 경력, 학력, 기술 스택
- `src/components/PortfolioList.jsx`: 포트폴리오 목록

## 스타일링

순수 CSS로 작성되어 있으며, Bento Grid 레이아웃을 사용합니다.
다크 테마 기반의 모던한 디자인입니다.

