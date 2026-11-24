// 포트폴리오 목록 데이터
// 새 작업물을 올릴 때는 이 파일의 WORKS 배열에 항목 하나를 추가하면 됩니다.
// 맨 위에 쓴 항목이 목록에서도 맨 앞에 나옵니다.

window.PROFILE = {
  name: "Ayden",
  intro: "아이디어가 생기면 직접 만들어 봅니다. 데스크톱 앱부터 웹 서비스, AI 도구까지 지금 만들고 있는 것들을 모아 둡니다.",
  links: [
    { label: "GitHub", url: "https://github.com/aydenchoi" },
    { label: "개발 블로그", url: "https://opaqe.github.io" },
  ],
};

window.WORKS = [
  {
    title: "0Brix",
    summary: "유튜브 채널 성장 분석 서비스. 채널의 구독자·조회수 증가와 급상승 동영상을 매일 수집해 보여 주며, AI 코딩 에이전트와 함께 1인이 기획부터 배포까지 만들었습니다.",
    tags: ["웹 서비스", "AI", "데이터 분석"],
    date: "2026-11",
    status: "운영 중",
    page: "works/0brix/",
    thumb: "works/0brix/thumb.jpg",
    service: "https://www.0brix.xyz",
    repo: "",
  },
  {
    title: "IXIBase",
    summary: "페르소나 AI가 Threads 계정을 대신 운영하는 자동화 스위트. 글감부터 작성, 발행, 댓글 응대, 성과 분석까지 이어지며, AI 코딩 에이전트와 함께 기획부터 배포까지 만들었습니다.",
    tags: ["웹 서비스", "AI", "자동화"],
    date: "2026-11",
    status: "공개 준비 중",
    page: "works/ixibase/",
    thumb: "works/ixibase/thumb.png",
    service: "https://www.ixibase.xyz",
    repo: "",
  },
  {
    title: "DayDeck",                       // 작업물 이름 (필수)
    summary: "Windows 11용 할 일·달력·메모·알림 프로그램. 트레이에 상주하며 \"내일 오후 3시 치과\"처럼 한 줄로 일정을 넣고, 정해진 시각에 확실히 알립니다.", // 한두 문장 소개 (필수)
    tags: ["데스크톱 앱", "C#", "WPF"],      // 분류 태그 (위쪽 필터 단추로 쓰임)
    date: "2026-11",                         // 연-월
    status: "Microsoft Store 출시",          // 예: 운영 중, 개발 중, 완료
    page: "works/daydeck/",                  // 포트폴리오 HTML 경로. 비워 두면 카드에 '자세히 보기'가 안 나옵니다.
    thumb: "works/daydeck/thumb.jpg",        // 썸네일 이미지 경로. 비워 두면 이름 첫 글자로 표시
    service: "https://apps.microsoft.com/detail/9NMBVQZ9X7NG?hl=ko-kr&gl=KR", // 실제 서비스 주소
    serviceLabel: "MS Store",                // 서비스 단추 글자 (생략하면 '서비스 열기')
    repo: "https://github.com/aydenchoi/DayDeck", // 공개 저장소 주소
  },
];
