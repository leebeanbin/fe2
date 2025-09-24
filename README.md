# 🤖 Fact-tory - 뉴스 편향성 분석 AI

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3.24-pink?style=for-the-badge&logo=framer)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/leebeanbin/fe2?style=for-the-badge)](https://github.com/leebeanbin/fe2/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/leebeanbin/fe2?style=for-the-badge)](https://github.com/leebeanbin/fe2/network)

**AI가 뉴스의 편향성을 분석하고 균형 잡힌 관점을 제공하는 혁신적인 웹 플랫폼**

[🚀 데모 보기](#-데모) • [📖 문서](#-문서) • [🛠️ 설치](#-설치) • [🤝 기여하기](#-기여하기)

</div>

---

## 📋 목차

- [✨ 주요 기능](#-주요-기능)
- [🛠️ 기술 스택](#️-기술-스택)
- [🚀 데모](#-데모)
- [📦 설치](#-설치)
- [🏗️ 프로젝트 구조](#️-프로젝트-구조)
- [🎨 컴포넌트](#-컴포넌트)
- [📱 반응형 디자인](#-반응형-디자인)
- [⚡ 성능 최적화](#-성능-최적화)
- [🧪 테스트](#-테스트)
- [📚 API 문서](#-api-문서)
- [🤝 기여하기](#-기여하기)
- [📄 라이선스](#-라이선스)

---

## ✨ 주요 기능

### 🔍 **뉴스 편향성 분석**

- AI 기반 뉴스 편향성 실시간 분석
- 객관적 관점 제공 및 팩트체킹
- 다양한 시각으로 뉴스 해석

### 📊 **실시간 뉴스 대시보드**

- 정치, 경제, 사회, 국제 카테고리별 뉴스 표시
- 급상승 뉴스 및 인기 뉴스 섹션
- 자동 업데이트 (30초마다)

### 🔎 **스마트 검색 시스템**

- 실시간 키워드 검색
- 검색 결과 하이라이팅
- 카테고리별 필터링

### 🎨 **사용자 경험**

- 부드러운 애니메이션 (Framer Motion)
- 반응형 디자인
- 직관적인 인터페이스

---

## 🛠️ 기술 스택

### **Frontend**

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### **애니메이션 & UI**

![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3.24-0055FF?style=flat-square&logo=framer&logoColor=white)

### **개발 도구**

![ESLint](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?style=flat-square&logo=prettier&logoColor=white)
![Husky](https://img.shields.io/badge/Husky-9.1.7-000000?style=flat-square&logo=husky&logoColor=white)

### **패키지 매니저**

![PNPM](https://img.shields.io/badge/PNPM-8.x-F69220?style=flat-square&logo=pnpm&logoColor=white)

---

## 🚀 데모

### 🖥️ **데스크톱 뷰**

- 히어로 섹션과 검색 기능
- 카테고리별 뉴스 표시
- 부드러운 애니메이션 효과

### 📱 **모바일 뷰**

- 반응형 레이아웃
- 터치 친화적 인터페이스
- 최적화된 사용자 경험

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

# 3. 개발 서버 실행
pnpm dev

# 4. 브라우저에서 확인
# http://localhost:3000
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

# 코드 포맷팅
pnpm format
```

---

## 🏗️ 프로젝트 구조

```
fe2/
├── 📁 public/                 # 정적 파일
│   ├── 📁 img/               # 이미지 리소스
│   └── 📁 fonts/             # 폰트 파일
├── 📁 src/
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📄 layout.tsx     # 루트 레이아웃
│   │   ├── 📄 page.tsx      # 메인 페이지
│   │   └── 📄 globals.css   # 전역 스타일
│   ├── 📁 components/       # React 컴포넌트
│   │   ├── 📁 icons/        # 아이콘 컴포넌트
│   │   ├── 📄 MainPage.tsx  # 메인 페이지 컴포넌트
│   │   ├── 📄 SearchModal.tsx # 검색 모달
│   │   ├── 📄 Sidebar.tsx   # 사이드바
│   │   └── 📄 Logo.tsx     # 로고 컴포넌트
│   └── 📁 lib/              # 유틸리티 함수
├── 📄 package.json          # 프로젝트 설정
├── 📄 tailwind.config.ts    # Tailwind 설정
├── 📄 next.config.mjs       # Next.js 설정
└── 📄 tsconfig.json         # TypeScript 설정
```

---

## 🎨 컴포넌트

### **MainPage.tsx**

메인 페이지의 핵심 컴포넌트로 다음 섹션들을 포함합니다:

- **히어로 섹션**: 서비스 소개 및 검색 기능
- **API 파트너 섹션**: Daum, Google, Naver 로고
- **기능 소개 섹션**: 3가지 핵심 기능 설명
- **실시간 뉴스 섹션**: 카테고리별 뉴스 표시
- **급상승 뉴스 섹션**: 인기 뉴스 표시
- **푸터 섹션**: 서비스 링크 및 회사 정보

### **SearchModal.tsx**

실시간 검색 기능을 제공하는 모달 컴포넌트:

- 키워드 기반 실시간 검색
- 검색 결과 하이라이팅
- 카테고리별 필터링
- ESC 키 지원

### **Sidebar.tsx**

사이드바 네비게이션 컴포넌트:

- 접기/펼치기 기능
- 기사 히스토리 표시
- 메뉴 네비게이션
- 반응형 디자인

---

## 📱 반응형 디자인

### **브레이크포인트**

```css
/* 모바일 */
@media (max-width: 768px) { ... }

/* 태블릿 */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* 데스크톱 */
@media (min-width: 1025px) { ... }
```

### **그리드 시스템**

- **사이드바**: 260px 고정 너비
- **메인 콘텐츠**: 유연한 너비
- **반응형 레이아웃**: 모든 디바이스 지원

---

## ⚡ 성능 최적화

### **코드 분할**

- Next.js 자동 코드 분할
- 동적 임포트 활용
- 컴포넌트 지연 로딩

### **이미지 최적화**

- Next.js Image 컴포넌트 사용
- WebP/AVIF 포맷 지원
- 지연 로딩 적용

### **애니메이션 최적화**

- Framer Motion 최적화
- GPU 가속 활용
- 불필요한 리렌더링 방지

---

## 🧪 테스트

### **테스트 실행**

```bash
# 단위 테스트
pnpm test

# E2E 테스트
pnpm test:e2e

# 테스트 커버리지
pnpm test:coverage
```

### **테스트 시나리오**

- [x] 메인 페이지 로드 및 렌더링
- [x] 카테고리 탭 전환
- [x] 검색 모달 기능
- [x] 반응형 디자인
- [x] 애니메이션 효과

---

## 📚 API 문서

### **뉴스 데이터 구조**

```typescript
interface NewsItem {
  title: string; // 뉴스 제목
  content: string; // 뉴스 내용
  image: string; // 이미지 URL
  source: string; // 언론사
  date: string; // 발행일
  category: string; // 카테고리
}
```

### **검색 API**

```typescript
// 검색 함수
const handleSearch = async (query: string) => {
  // 검색 로직 구현
};
```

---

## 🤝 기여하기

### **기여 방법**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **코드 스타일**

- ESLint 규칙 준수
- Prettier 포맷팅 적용
- TypeScript 타입 정의
- 컴포넌트 문서화

### **커밋 컨벤션**

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 설정 변경
```

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
