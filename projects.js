// 새 페이지를 만들면 이 목록에 항목 하나만 추가하세요. 위에 있을수록 먼저 나옵니다.
// links: 제목을 여러 링크로 나눌 때(" / "로 이어짐), thumb: 800x500 화면 이미지, color: 칸 배경색, ink: 글자색, tech: 쓴 기술
window.PROJECTS = [
  {
    name: "앵파크",
    url: "https://anglog.nobody-asked.dev/",
    thumb: "assets/angpark.jpg",
    line: "오늘은 앵무새가 되어 놉니다.",
    about: "단풍이 우거진 가을 공원에서 앵무새가 되어 날고 짹짹거립니다. 로그인 없이 바로 놀 수 있고, 다른 앵무네 집에도 놀러 갈 수 있습니다.",
    tech: "Java Spring, WebSocket, Three.js",
    color: "#f5a03a",
    ink: "#1c1c1c"
  },
  {
    name: "매직 위즈파크 / 라이온즈파크",
    url: "https://wiz.gohaeyaji.com/#kt",
    links: [
      { label: "매직 위즈파크", url: "https://wiz.gohaeyaji.com/#kt" },
      { label: "라이온즈파크", url: "https://wiz.gohaeyaji.com/#samsung" }
    ],
    thumb: "assets/wizpark.jpg",
    line: "구장에 못 가도 같이 응원합니다.",
    about: "한국시리즈 비공식 3D 응원 공간입니다. KT 위즈파크와 삼성 라이온즈파크 중 응원석을 골라 유니폼을 갈아입고 응원도구를 흔들며 문자중계를 전광판으로 봅니다.",
    tech: "Three.js, Node.js, WebSocket",
    color: "#d9142d",
    ink: "#ffffff"
  },
  {
    name: "고해야지",
    url: "https://gohaeyaji.com/",
    thumb: "assets/gohaeyaji.jpg",
    line: "공부해야지, 운동해야지, 그리고 고해야지.",
    about: "3D 성당의 고해소에 들어가 오늘의 실패를 털어놓으면 신부님이 농담으로 답해 줍니다.",
    tech: "Java Spring, Redis, WebSocket, Three.js",
    color: "#ffb7d3",
    ink: "#1c1c1c"
  }
];
