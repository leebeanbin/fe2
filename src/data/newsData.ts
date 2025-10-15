export interface NewsItem {
  title: string;
  content: string;
  image: string;
  source: string;
  date: string;
}

export interface SearchNewsItem extends NewsItem {
  id: number;
  category: string;
}

export interface NewsDataByCategory {
  [category: string]: NewsItem[];
}

// 실시간 뉴스 데이터
export const newsData: NewsDataByCategory = {
  정치: [
    {
      title: "대통령실 '정치적 편향성 논란' 해명 발표",
      content:
        'AI 분석 결과 중립적 표현 대신 감정적 표현이 47% 증가한 것으로 나타남',
      image: '/img/main/img_sec04_img.png',
      source: '연합뉴스',
      date: '3시간 전',
    },
    {
      title: "국정감사 질의서 '편향 표현' 논란 확산",
      content:
        '여야 의원들의 질의서에서 감정적 표현과 편향된 시각이 두드러지게 나타남',
      image: '/img/main/img_sec04_img.png',
      source: '중앙일보',
      date: '4시간 전',
    },
    {
      title: '정당별 보도자료 편향성 점수 공개',
      content: 'AI가 분석한 각 정당 보도자료의 편향성 점수가 처음으로 공개됨',
      image: '/img/main/img_sec04_img.png',
      source: '조선일보',
      date: '5시간 전',
    },
    {
      title: "선거 공약 팩트체킹 결과 '허위 주장' 급증",
      content:
        '지방선거 공약 중 검증 불가능하거나 허위로 판명된 내용이 전체의 31%',
      image: '/img/main/img_sec04_img.png',
      source: '한겨레',
      date: '6시간 전',
    },
    {
      title: '정치인 발언 진실성 점수 실시간 공개',
      content: 'AI 팩트체킹으로 정치인 발언의 진실성을 실시간 분석하여 점수화',
      image: '/img/main/img_sec04_img.png',
      source: '한국일보',
      date: '12시간 전',
    },
    {
      title: '국회 회의록 감정 단어 사용 빈도 급증',
      content: '최근 국회 회의록에서 감정적 표현 사용이 전년 대비 156% 증가',
      image: '/img/main/img_sec04_img.png',
      source: '서울신문',
      date: '9시간 전',
    },
  ],
  경제: [
    {
      title: "경제 정책 보도 '좌편향' vs '우편향' 분석 결과",
      content: '주요 언론사별 경제 정책 보도 편향성 분석에서 명확한 차이 발견',
      image: '/img/main/img_sec04_img.png',
      source: '매일경제',
      date: '2시간 전',
    },
    {
      title: '부동산 정책 보도의 감정적 표현 사용 급증',
      content: '부동산 관련 뉴스에서 객관적 수치보다 감정적 표현이 68% 증가',
      image: '/img/main/img_sec04_img.png',
      source: '한국경제',
      date: '4시간 전',
    },
    {
      title: '금리 인상 보도, 언론사별 시각차 뚜렷',
      content: '동일한 금리 정책에 대한 언론사별 보도 논조에서 극명한 차이',
      image: '/img/main/img_sec04_img.png',
      source: '서울경제',
      date: '6시간 전',
    },
    {
      title: "증시 보도 '공포 마케팅' 키워드 급증",
      content:
        '주식시장 하락 보도에서 불안감을 조성하는 표현이 전월 대비 85% 증가',
      image: '/img/main/img_sec04_img.png',
      source: '이데일리',
      date: '8시간 전',
    },
    {
      title: '경제 전망 보도의 편향성 지수 발표',
      content:
        '각 언론사의 경제 전망 보도에서 낙관론과 비관론의 편중 현상 분석',
      image: '/img/main/img_sec04_img.png',
      source: '파이낸셜뉴스',
      date: '10시간 전',
    },
    {
      title: '취업률 통계 보도, 해석의 편향성 논란',
      content: '동일 취업률 데이터를 두고 언론사별 해석과 강조점에서 큰 차이',
      image: '/img/main/img_sec04_img.png',
      source: '헤럴드경제',
      date: '14시간 전',
    },
  ],
  사회: [
    {
      title: '온라인 댓글 감정 분석으로 본 여론 동향',
      content: 'SNS와 뉴스 댓글 분석 결과 부정적 감정 표현이 68% 증가',
      image: '/img/main/img_sec04_img.png',
      source: '동아일보',
      date: '1시간 전',
    },
    {
      title: '교육 정책 보도의 학부모 여론 편향성 분석',
      content:
        '학부모 대상 교육정책 보도에서 불안 조성 표현이 두드러지게 나타남',
      image: '/img/main/img_sec04_img.png',
      source: '조선일보',
      date: '3시간 전',
    },
    {
      title: '의료진 파업 보도, 찬반 논조 극명한 대립',
      content:
        '의료진 집단행동에 대한 언론 보도에서 찬성과 반대 논조가 극명하게 갈림',
      image: '/img/main/img_sec04_img.png',
      source: '중앙일보',
      date: '5시간 전',
    },
    {
      title: '범죄 보도의 선정성 지수 측정 결과',
      content:
        '강력범죄 관련 뉴스에서 자극적 표현 사용이 일반 뉴스 대비 2.8배 높아',
      image: '/img/main/img_sec04_img.png',
      source: '경향신문',
      date: '7시간 전',
    },
    {
      title: '재해 보도의 감정적 표현 사용 패턴 분석',
      content:
        '자연재해 관련 보도에서 객관적 정보보다 감정적 표현이 우선시되는 경향',
      image: '/img/main/img_sec04_img.png',
      source: '한겨레',
      date: '9시간 전',
    },
    {
      title: '사회갈등 보도, 극단적 표현 사용 급증',
      content:
        '사회 내 갈등 상황 보도에서 중재적 표현보다 극단적 표현이 73% 증가',
      image: '/img/main/img_sec04_img.png',
      source: '국민일보',
      date: '11시간 전',
    },
  ],
  국제: [
    {
      title: '미중 갈등 보도, 한국 언론의 편향성 분석',
      content:
        '미중 관계 보도에서 친미 vs 친중 성향 언론사별 차이가 뚜렷하게 나타남',
      image: '/img/main/img_sec04_img.png',
      source: '연합뉴스',
      date: '2시간 전',
    },
    {
      title: '일본 관련 뉴스의 감정적 표현 사용 실태',
      content:
        '한일 관계 뉴스에서 감정적 표현이 객관적 사실 전달보다 우선시되는 경향',
      image: '/img/main/img_sec04_img.png',
      source: '조선일보',
      date: '4시간 전',
    },
    {
      title: '우크라이나 전쟁 보도의 편향성 지수',
      content:
        '우크라이나 전쟁 관련 보도에서 서방 vs 러시아 시각의 편중 현상 분석',
      image: '/img/main/img_sec04_img.png',
      source: '중앙일보',
      date: '6시간 전',
    },
    {
      title: '북한 뉴스 보도 논조의 극단화 현상',
      content: '북한 관련 보도에서 극단적 표현 사용이 전년 동기 대비 124% 증가',
      image: '/img/main/img_sec04_img.png',
      source: '동아일보',
      date: '8시간 전',
    },
    {
      title: '중국 경제 보도의 시각차 분석 결과',
      content: '중국 경제 현황 보도에서 언론사별 낙관론과 비관론의 극명한 대비',
      image: '/img/main/img_sec04_img.png',
      source: '한국일보',
      date: '10시간 전',
    },
    {
      title: '국제 환경 정책 보도의 편향성 측정',
      content: '기후변화 대응 정책 보도에서 찬성과 반대 논조의 균형 결여 현상',
      image: '/img/main/img_sec04_img.png',
      source: '경향신문',
      date: '13시간 전',
    },
  ],
};

// 급상승 뉴스 데이터
export const trendingNewsData: NewsDataByCategory = {
  정치: [
    {
      title: "야당 대표 발언 '극단적 표현' 사용 급증",
      content:
        '최근 일주일간 야당 지도부 발언에서 극단적 표현이 전주 대비 89% 증가',
      image: '/img/main/img_sec04_img.png',
      source: 'SBS',
      date: '1시간 전',
    },
    {
      title: "여론조사 결과 해석 '편향성' 논란 확산",
      content:
        '동일한 여론조사 결과를 두고 언론사별 해석과 강조점에서 정반대 결론',
      image: '/img/main/img_sec04_img.png',
      source: 'KBS',
      date: '2시간 전',
    },
    {
      title: "정치 뉴스 댓글 감정 분석 '분노 지수' 최고치",
      content: '주요 포털 정치 뉴스 댓글에서 분노 표현이 평소 대비 156% 급증',
      image: '/img/main/img_sec04_img.png',
      source: 'MBC',
      date: '3시간 전',
    },
    {
      title: '국정감사 중계방송 시청률 급상승',
      content:
        '편향성 논란이 된 국정감사 장면의 온라인 조회수가 24시간 만에 100만뷰 돌파',
      image: '/img/main/img_sec04_img.png',
      source: 'JTBC',
      date: '4시간 전',
    },
  ],
  경제: [
    {
      title: "부동산 정책 발표 '희비쌍곡' 보도 양상",
      content: "동일 부동산 정책에 대해 언론사별 '호재 vs 악재' 정반대 평가",
      image: '/img/main/img_sec04_img.png',
      source: '연합뉴스',
      date: '30분 전',
    },
    {
      title: "경제지표 발표 후 '해석 차이' 극명",
      content: 'GDP 성장률 발표 후 언론사별 낙관론과 비관론으로 극명하게 갈려',
      image: '/img/main/img_sec04_img.png',
      source: '머니투데이',
      date: '1시간 전',
    },
    {
      title: "증시 급등 뒤 '투자 권유' 보도 급증",
      content:
        "코스피 상승 이후 경제매체들의 '투자 기회' 관련 보도가 300% 증가",
      image: '/img/main/img_sec04_img.png',
      source: '이투데이',
      date: '2시간 전',
    },
  ],
  사회: [
    {
      title: "의대 정원 확대 '찬반 논란' 보도 경쟁",
      content:
        '의대 정원 관련 뉴스에서 찬성과 반대 입장 보도가 각각 50% 이상 증가',
      image: '/img/main/img_sec04_img.png',
      source: 'YTN',
      date: '45분 전',
    },
    {
      title: "교육정책 학부모 반응 '극과 극' 분석",
      content: '새 교육정책에 대한 학부모 반응이 지역별로 극명한 차이를 보임',
      image: '/img/main/img_sec04_img.png',
      source: '채널A',
      date: '1시간 전',
    },
    {
      title: "범죄 보도 '선정적 표현' 사용 급증",
      content:
        '최근 강력범죄 보도에서 자극적 표현 사용이 일반 뉴스 대비 4배 증가',
      image: '/img/main/img_sec04_img.png',
      source: 'TV조선',
      date: '2시간 전',
    },
  ],
  국제: [
    {
      title: "한미정상회담 보도 '성과 평가' 엇갈려",
      content: '동일 정상회담 결과를 두고 언론사별 성과 평가가 정반대로 갈림',
      image: '/img/main/img_sec04_img.png',
      source: '뉴스1',
      date: '1시간 전',
    },
    {
      title: "중국 경제 현황 보도 '시각차' 극명",
      content: '중국 경제지표 발표 후 한국 언론의 해석이 극과 극으로 나뉨',
      image: '/img/main/img_sec04_img.png',
      source: '뉴시스',
      date: '2시간 전',
    },
    {
      title: "일본 관련 뉴스 댓글 '감정 표현' 급상승",
      content: '한일관계 뉴스 댓글에서 감정적 표현이 평상시 대비 200% 증가',
      image: '/img/main/img_sec04_img.png',
      source: '아시아경제',
      date: '3시간 전',
    },
  ],
};

// 검색용 통합 뉴스 데이터
export const getAllNewsData = (): SearchNewsItem[] => {
  const allNews: SearchNewsItem[] = [];
  let id = 1;

  Object.entries(newsData).forEach(([category, items]) => {
    items.forEach(item => {
      allNews.push({ ...item, id: id++, category });
    });
  });

  return allNews;
};
