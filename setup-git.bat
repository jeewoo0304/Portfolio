@echo off
chcp 65001 >nul
echo ========================================
echo Git 저장소 초기화 및 GitHub 연결 스크립트
echo ========================================
echo.

REM index.html 파일 확인
if not exist "index.html" (
    echo [오류] index.html 파일을 찾을 수 없습니다.
    echo 이 스크립트는 프로젝트 루트 폴더(index.html이 있는 폴더)에서 실행해야 합니다.
    pause
    exit /b 1
)

echo [1단계] Git 저장소 초기화 중...
if exist ".git" (
    echo .git 폴더가 이미 존재합니다.
) else (
    git init
    echo Git 저장소가 초기화되었습니다.
)

echo.
echo [2단계] 파일을 스테이징 영역에 추가 중...
git add .

echo.
echo [3단계] 초기 커밋 생성 중...
git commit -m "Initial commit"

echo.
echo ========================================
echo GitHub 연결 방법
echo ========================================
echo 1. GitHub에서 새 저장소를 만드세요: https://github.com/new
echo 2. 저장소 이름을 입력하고 생성하세요
echo 3. 저장소 URL을 복사하세요 (예: https://github.com/username/repo.git)
echo.
echo 그 다음 아래 명령어를 실행하세요:
echo.
echo    git remote add origin YOUR_REPOSITORY_URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo 또는 저장소 URL을 입력하면 자동으로 연결해드립니다.
echo.
set /p repoUrl="GitHub 저장소 URL을 입력하세요 (Enter로 건너뛰기): "

if not "%repoUrl%"=="" (
    echo.
    echo 원격 저장소 추가 중...
    git remote add origin %repoUrl%
    
    echo 브랜치 이름을 main으로 설정 중...
    git branch -M main
    
    echo.
    echo 원격 저장소에 푸시하려면 다음 명령어를 실행하세요:
    echo    git push -u origin main
) else (
    echo 건너뛰었습니다. 나중에 위의 명령어를 사용하여 연결할 수 있습니다.
)

echo.
echo 완료!
pause

