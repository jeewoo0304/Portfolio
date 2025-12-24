# Git 저장소 초기화 및 GitHub 연결 스크립트
# 주의: 이 스크립트는 프로젝트 폴더에서 실행해야 합니다 (index.html이 있는 폴더)

Write-Host "프로젝트 폴더 확인 중..." -ForegroundColor Cyan
if (-not (Test-Path 'index.html')) {
    Write-Host "오류: index.html 파일을 찾을 수 없습니다." -ForegroundColor Red
    Write-Host "이 스크립트는 프로젝트 루트 폴더(index.html이 있는 폴더)에서 실행해야 합니다." -ForegroundColor Yellow
    exit 1
}

Write-Host "`nGit 저장소 초기화 중..." -ForegroundColor Green

# Git 저장소 초기화
if (Test-Path .git) {
    Write-Host ".git 폴더가 이미 존재합니다." -ForegroundColor Yellow
} else {
    git init
    Write-Host "Git 저장소가 초기화되었습니다." -ForegroundColor Green
}

# 모든 파일 추가
Write-Host "`n파일을 스테이징 영역에 추가 중..." -ForegroundColor Green
git add .

# 초기 커밋
Write-Host "`n초기 커밋 생성 중..." -ForegroundColor Green
git commit -m "Initial commit"

Write-Host "`n=== GitHub 연결 방법 ===" -ForegroundColor Cyan
Write-Host "1. GitHub에서 새 저장소를 만드세요: https://github.com/new" -ForegroundColor White
Write-Host "2. 저장소 이름을 입력하고 생성하세요" -ForegroundColor White
Write-Host "3. 아래 명령어를 실행하세요 (YOUR_USERNAME과 YOUR_REPO_NAME을 실제 값으로 변경):" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""
Write-Host "또는 저장소 URL을 입력하면 자동으로 연결해드립니다." -ForegroundColor Cyan

# 사용자에게 저장소 URL 입력 요청
$repoUrl = Read-Host "`nGitHub 저장소 URL을 입력하세요 (예: https://github.com/username/repo.git) 또는 Enter로 건너뛰기"

if ($repoUrl -ne "") {
    Write-Host "원격 저장소 추가 중..." -ForegroundColor Green
    git remote add origin $repoUrl
    
    Write-Host "브랜치 이름을 main으로 설정 중..." -ForegroundColor Green
    git branch -M main
    
    Write-Host "`n원격 저장소에 푸시하려면 다음 명령어를 실행하세요:" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Yellow
} else {
    Write-Host "건너뛰었습니다. 나중에 위의 명령어를 사용하여 연결할 수 있습니다." -ForegroundColor Yellow
}

