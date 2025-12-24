# GitHub 연결 가이드

## 빠른 시작 (권장)

프로젝트 폴더에서 `setup-git.bat` 파일을 더블클릭하거나 실행하세요. 자동으로 Git 초기화와 초기 커밋이 완료됩니다.

## 수동 설정 방법

### 1단계: Git 저장소 초기화

터미널에서 프로젝트 폴더로 이동한 후 다음 명령어를 실행하세요:

```bash
git init
git add .
git commit -m "Initial commit"
```

## 2단계: GitHub 저장소 생성

1. https://github.com/new 에 접속
2. 저장소 이름 입력 (예: Portfolio)
3. Public 또는 Private 선택
4. "Create repository" 클릭

## 3단계: 원격 저장소 연결

GitHub에서 생성한 저장소의 URL을 복사한 후, 아래 명령어를 실행하세요:

```bash
# 원격 저장소 추가 (YOUR_USERNAME과 YOUR_REPO_NAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 브랜치 이름을 main으로 설정
git branch -M main

# 코드 푸시
git push -u origin main
```

## 예시

만약 사용자명이 `jeewoo`이고 저장소 이름이 `portfolio`라면:

```bash
git remote add origin https://github.com/jeewoo/portfolio.git
git branch -M main
git push -u origin main
```

## PowerShell 스크립트 사용하기

또는 `setup-git.ps1` 파일을 실행할 수도 있습니다:

```powershell
.\setup-git.ps1
```

스크립트가 자동으로 Git을 초기화하고 초기 커밋을 생성해줍니다.

