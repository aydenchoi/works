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
    title: "DayDeck",                       // 작업물 이름 (필수)
    summary: "Windows 11용 할 일·달력·메모·알림 프로그램. 트레이에 상주하며 메모리를 적게 쓰고, \"내일 오후 3시 치과\"처럼 한 줄로 일정을 넣습니다.", // 한두 문장 소개 (필수)
    tags: ["데스크톱 앱", "C#", "WPF"],      // 분류 태그 (위쪽 필터 단추로 쓰임)
    date: "2026-11",                         // 연-월
    status: "개발 중",                       // 예: 운영 중, 개발 중, 완료
    page: "",                                // 포트폴리오 HTML 경로 (예: "works/daydeck/"). 비워 두면 카드에 '자세히 보기'가 안 나옵니다.
    thumb: "",                               // 썸네일 이미지 경로 (예: "works/daydeck/thumb.png"). 비워 두면 이름 첫 글자로 표시
    service: "",                             // 실제 서비스 주소
    repo: "https://github.com/aydenchoi/DayDeck", // 공개 저장소 주소
  },
];
