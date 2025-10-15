# 🤖 Fact-tory - 뉴스 편향성 분석 AI

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/leebeanbin/fe2?style=for-the-badge)](https://github.com/leebeanbin/fe2/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/leebeanbin/fe2?style=for-the-badge)](https://github.com/leebeanbin/fe2/network)

**AI가 뉴스의 편향성을 분석하고 균형 잡힌 관점을 제공하는 혁신적인 웹 플랫폼**

[🚀 데모 보기](#-주요-기능) • [📖 문서](#-기술-스택) • [🛠️ 설치](#-설치) • [🤝 기여하기](#-기여하기)

</div>

---

## 📋 목차

- [✨ 주요 기능](#-주요-기능)
- [🛠️ 기술 스택](#️-기술-스택)
- [📦 설치](#-설치)
- [🏗️ 프로젝트 구조](#️-프로젝트-구조)
- [🎨 주요 컴포넌트](#-주요-컴포넌트)
- [📱 반응형 디자인](#-반응형-디자인)
- [⚡ 성능 최적화](#-성능-최적화)
- [🤝 기여하기](#-기여하기)
- [📄 라이선스](#-라이선스)

---

## ✨ 주요 기능

### 🔍 **AI 기반 뉴스 편향성 분석**

- 실시간 뉴스 편향성 분석 및 팩트체킹
- 다양한 시각으로 뉴스 해석 제공
- 객관적 관점 제시 및 균형 잡힌 정보 전달

### 📊 **사용자 분석 대시보드**

- Chart.js 기반 데이터 시각화 (막대, 라인, 파이, 네트워크 그래프)
- 사용자 행동 패턴 분석
- 분석 이력 및 통계 확인

### 🔐 **소셜 로그인**

- Google, Kakao OAuth 인증
- 안전한 토큰 기반 인증
- CSRF 보호 적용

### 📰 **실시간 뉴스 대시보드**

- 정치, 경제, 사회, 국제 카테고리별 뉴스
- 급상승 뉴스 및 인기 뉴스 섹션
- Swiper 기반 뉴스 슬라이더

### 🔎 **스마트 검색 시스템**

- 실시간 키워드 검색
- 검색 결과 하이라이팅
- 카테고리별 필터링

### 🎨 **사용자 경험**

- Framer Motion 기반 부드러운 애니메이션
- 반응형 디자인 (Desktop/Mobile)
- 직관적인 인터페이스

---

## 🛠️ 기술 스택

### **Frontend Core**

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### **상태 관리 & HTTP**

![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.90.3-FF4154?style=flat-square&logo=react-query&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4?style=flat-square&logo=axios&logoColor=white)

### **데이터 시각화 & UI**

![Chart.js](https://img.shields.io/badge/Chart.js-4.5.0-FF6384?style=flat-square&logo=chart.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3.24-0055FF?style=flat-square&logo=framer&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-12.0.2-6332F6?style=flat-square&logo=swiper&logoColor=white)
![vis-network](https://img.shields.io/badge/vis--network-10.0.2-FFD700?style=flat-square)

### **개발 도구**

![ESLint](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?style=flat-square&logo=prettier&logoColor=white)
![Husky](https://img.shields.io/badge/Husky-9.1.7-000000?style=flat-square&logo=husky&logoColor=white)

### **패키지 매니저**

![PNPM](https://img.shields.io/badge/PNPM-8.x-F69220?style=flat-square&logo=pnpm&logoColor=white)

---

## 📦 설치

### **필수 요구사항**

- Node.js 18.0.0 이상
- PNPM 8.0.0 이상

### **설치 과정**

```bash
# 1. 저장소 클론
git clone https://github.com/leebeanbin/fe2.git
cd fe2

# 2. 의존성 설치
pnpm install

# 3. 환경 변수 설정
cp .env.example .env.local
# .env.local 파일을 열어 필요한 값들을 설정하세요

# 4. 개발 서버 실행
pnpm dev

# 5. 브라우저에서 확인
# http://localhost:3000
```

### **환경 변수**

`.env.local` 파일에 다음 환경 변수를 설정하세요:

```bash
NEXT_PUBLIC_API_BASE_URL=          # 백엔드 API URL
NEXT_PUBLIC_AUTH_REDIRECT_URI=     # OAuth 콜백 URL (예: http://localhost:3000/auth/callback)
```

### **빌드 및 배포**

```bash
# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 타입 체크
pnpm type-check

# 린트 검사
pnpm lint

# 린트 자동 수정
pnpm lint:fix

# 코드 포맷팅
pnpm format

# 포맷 검사
pnpm format:check
```

---

## 🏗️ 프로젝트 구조

```
fe2/
├── 📁 public/                 # 정적 파일
│   ├── 📁 img/               # 이미지 리소스
│   └── 📁 fonts/             # 폰트 파일 (Pretendard)
├── 📁 src/
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📄 layout.tsx     # 루트 레이아웃
│   │   ├── 📄 page.tsx       # 메인 페이지 (/)
│   │   ├── 📄 providers.tsx  # TanStack Query Provider
│   │   ├── 📄 globals.css    # 전역 스타일
│   │   ├── 📁 auth/          # 인증 관련 페이지
│   │   │   ├── 📁 login/     # 로그인 페이지 (/auth/login)
│   │   │   └── 📁 callback/[provider]/  # OAuth 콜백 (/auth/callback/google, /auth/callback/kakao)
│   │   ├── 📁 analyze/       # 뉴스 분석 입력 (/analyze)
│   │   ├── 📁 analyzing/     # 분석 진행 중 (/analyzing)
│   │   ├── 📁 analysis/[analysisId]/  # 분석 결과 (/analysis/:id)
│   │   ├── 📁 user-analytics/ # 사용자 대시보드 (/user-analytics)
│   │   └── 📁 api/           # API Routes
│   │       ├── 📁 health/    # 헬스체크 (/api/health)
│   │       └── 📁 v1/        # API v1
│   │           ├── 📁 analysis/submit/  # 분석 제출 API
│   │           └── 📁 auth/status/      # 인증 상태 확인
│   ├── 📁 components/        # React 컴포넌트
│   │   ├── 📁 Main/          # 메인 페이지 섹션
│   │   │   ├── 📄 HeroSection.tsx
│   │   │   ├── 📄 FeaturesSection.tsx
│   │   │   ├── 📄 NewsSection.tsx
│   │   │   └── 📄 TrendingSection.tsx
│   │   ├── 📁 charts/        # Chart.js 차트 컴포넌트
│   │   │   ├── 📄 chart-setup.ts      # Chart.js 전역 설정
│   │   │   ├── 📄 BarChart.tsx
│   │   │   ├── 📄 LineChart.tsx
│   │   │   ├── 📄 PieChart.tsx
│   │   │   ├── 📄 NetworkGraph.tsx
│   │   │   └── 📄 ResultsCharts.tsx
│   │   ├── 📁 icons/         # SVG 아이콘 컴포넌트
│   │   │   ├── 📄 HomeIcon.tsx
│   │   │   ├── 📄 SearchIcon.tsx
│   │   │   ├── 📄 UserIcon.tsx
│   │   │   ├── 📄 ArrowRightIcon.tsx
│   │   │   ├── 📄 CloseIcon.tsx
│   │   │   ├── 📄 DeleteIcon.tsx
│   │   │   ├── 📄 DotsIcon.tsx
│   │   │   └── 📄 ShareIcon.tsx
│   │   ├── 📁 Mobile/        # 모바일 레이아웃
│   │   │   └── 📄 MobileLayout.tsx
│   │   ├── 📁 Footer/        # 푸터
│   │   ├── 📄 MainPage.tsx   # 메인 페이지 컴포넌트
│   │   ├── 📄 SearchModal.tsx # 검색 모달
│   │   ├── 📄 Sidebar.tsx    # 사이드바
│   │   └── 📄 Logo.tsx       # 로고
│   ├── 📁 hooks/             # Custom React Hooks
│   │   ├── 📁 auth/          # 인증 관련 훅
│   │   ├── 📁 analysismodule/ # 분석 모듈 훅
│   │   ├── 📁 analysispages/  # 분석 페이지 훅
│   │   ├── 📁 sidebar/        # 사이드바 훅
│   │   ├── 📁 news/           # 뉴스 훅
│   │   └── 📁 admin/          # 관리자 훅
│   ├── 📁 lib/               # 유틸리티 라이브러리
│   │   ├── 📄 axios.ts       # Axios 인스턴스 (인터셉터 설정)
│   │   ├── 📄 serverApi.ts   # 서버 사이드 API
│   │   └── 📄 authStorage.ts # 로컬스토리지 토큰 관리
│   ├── 📁 utils/             # 유틸리티 함수
│   │   └── 📄 highlight.tsx  # 텍스트 하이라이팅
│   └── 📁 data/              # 정적 데이터
│       └── 📄 newsData.ts    # 뉴스 데이터
├── 📄 package.json           # 프로젝트 설정
├── 📄 tailwind.config.ts     # Tailwind 설정
├── 📄 next.config.mjs        # Next.js 설정
└── 📄 tsconfig.json          # TypeScript 설정
```

---

## 🎨 주요 컴포넌트

### **메인 페이지 구성**

#### **HeroSection.tsx** - `/src/components/Main/HeroSection.tsx`

서비스 소개 및 주요 검색 기능

- 서비스 타이틀 및 설명
- 검색창 통합
- Framer Motion 애니메이션

#### **FeaturesSection.tsx** - `/src/components/Main/FeaturesSection.tsx`

3가지 핵심 기능 소개

- AI 편향성 분석
- 팩트체킹 시스템
- 다양한 관점 제공

#### **NewsSection.tsx** - `/src/components/Main/NewsSection.tsx`

카테고리별 실시간 뉴스 표시

- 정치, 경제, 사회, 국제 탭
- Swiper 기반 뉴스 슬라이더
- 뉴스 데이터 동적 로딩

#### **TrendingSection.tsx** - `/src/components/Main/TrendingSection.tsx`

급상승 뉴스 및 인기 뉴스

- 실시간 트렌딩 뉴스
- 인기도 기반 정렬
- 카드 형식 레이아웃

### **인증 컴포넌트**

#### **로그인** - `/src/app/auth/login/page.tsx`

- Google, Kakao 소셜 로그인
- OAuth 플로우 시작
- CSRF 토큰 생성 및 검증

#### **OAuth 콜백** - `/src/app/auth/callback/[provider]/page.tsx`

- OAuth 인증 코드 처리
- 토큰 저장 (localStorage)
- 리다이렉트 처리

### **분석 시스템**

#### **분석 입력** - `/src/app/analyze/page.tsx`

뉴스 URL 또는 텍스트 입력

#### **분석 진행** - `/src/app/analyzing/page.tsx`

분석 진행 상태 표시

#### **분석 결과** - `/src/app/analysis/[analysisId]/page.tsx`

- Chart.js 차트로 시각화
- 편향성 분석 결과
- 팩트체킹 정보
- 다양한 관점 제공

### **사용자 대시보드**

#### **사용자 분석** - `/src/app/user-analytics/page.tsx`

- 사용자 행동 패턴 분석
- 분석 이력 통계
- 차트 기반 데이터 시각화

### **검색 및 네비게이션**

#### **SearchModal.tsx** - `/src/components/SearchModal.tsx`

실시간 검색 모달

- 키워드 검색
- 결과 하이라이팅
- 카테고리 필터
- ESC 키 닫기

#### **Sidebar.tsx** - `/src/components/Sidebar.tsx`

사이드바 네비게이션

- 접기/펼치기
- 분석 히스토리
- 메뉴 네비게이션
- 반응형 디자인

#### **MobileLayout.tsx** - `/src/components/Mobile/MobileLayout.tsx`

모바일 하단 탭 네비게이션

- 홈, 검색, 사용자 탭
- 활성 탭 하이라이트
- 터치 최적화

### **차트 컴포넌트**

모든 차트는 `src/components/charts/chart-setup.ts` 설정을 상속합니다.

#### **chart-setup.ts** - `/src/components/charts/chart-setup.ts`

- Chart.js 전역 설정
- 기본 색상 팔레트
- 폰트 및 테마 설정

#### **ResultsCharts.tsx** - `/src/components/charts/ResultsCharts.tsx`

분석 결과 차트 통합 컴포넌트

- 막대 차트 (BarChart)
- 라인 차트 (LineChart)
- 파이 차트 (PieChart)
- 네트워크 그래프 (NetworkGraph)

---

## 📱 반응형 디자인

### **브레이크포인트**

```css
/* 모바일 */
@media (max-width: 768px) {
  /* 하단 탭 네비게이션 */
  /* 단일 컬럼 레이아웃 */
}

/* 태블릿 */
@media (min-width: 769px) and (max-width: 1024px) {
  /* 사이드바 축소 */
  /* 2컬럼 그리드 */
}

/* 데스크톱 */
@media (min-width: 1025px) {
  /* 전체 사이드바 */
  /* 다중 컬럼 레이아웃 */
}
```

### **레이아웃 전략**

- **Desktop**: Sidebar (260px) + Main Content
- **Mobile**: Bottom Tab Navigation + Full Width Content
- **Grid System**: Tailwind CSS 그리드 시스템 활용

---

## ⚡ 성능 최적화

### **코드 분할**

- Next.js App Router 자동 코드 분할
- 동적 임포트로 컴포넌트 지연 로딩
- 페이지별 번들 최적화

### **이미지 최적화**

- Next.js Image 컴포넌트 사용
- WebP/AVIF 포맷 지원
- 지연 로딩 자동 적용

### **애니메이션 최적화**

- Framer Motion 최적화
- GPU 가속 활용 (transform, opacity)
- 불필요한 리렌더링 방지 (React.memo, useMemo)

### **상태 관리 최적화**

- TanStack Query 캐싱 전략
- Stale-While-Revalidate 패턴
- Optimistic Updates

---

## 🤝 기여하기

### **기여 방법**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **코드 스타일**

- ESLint 규칙 준수
- Prettier 포맷팅 적용
- TypeScript 엄격 모드
- 컴포넌트 주석 작성

### **커밋 컨벤션**

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅 (기능 변경 없음)
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 설정, 패키지 매니저 설정 등
```

### **Pre-commit Hooks**

Husky를 통해 자동으로 실행됩니다:

- ESLint 자동 수정
- Prettier 포맷팅
- TypeScript 타입 체크

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 📞 연락처

**프로젝트 관리자**: [@leebeanbin](https://github.com/leebeanbin)

**프로젝트 링크**: [https://github.com/leebeanbin/fe2](https://github.com/leebeanbin/fe2)

---

<div align="center">

### ⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요! ⭐

[![GitHub stars](https://img.shields.io/github/stars/leebeanbin/fe2?style=social)](https://github.com/leebeanbin/fe2/stargazers)

**Made with ❤️ by [leebeanbin](https://github.com/leebeanbin)**

</div>
