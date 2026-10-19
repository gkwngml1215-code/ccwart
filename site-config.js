/* =========================================================
   지점별 설정 — 춘천점
   ---------------------------------------------------------
   관리 도구의 나머지 파일(index.html, columns-core.js, github-publish.js, tests/)은
   전주점·강남점·제주점·춘천점이 똑같습니다. 지점마다 다른 값은 이 파일에만 둡니다.
   고친 뒤에는 어드민-제작-가이드.md 의 검증 두 가지를 꼭 실행하세요.

   ★ 도메인 ccwart.co.kr 확정 (2026-10-19). 바꿀 일이 생기면 이 파일의
     domain · siteDomain 두 곳을 함께 바꾸세요. (홈페이지 쪽은 hoo-chuncheon-landing/README.md 참고)
   ★ 춘천점은 코트라 플러스 CO2레이저 + 침 치료를 병행합니다 (제주점은 침 치료만).
========================================================= */
(function (root) {
  // 컬럼 페이지·목록 카드·발행에 쓰는 값
  const SITE = {
    domain: 'https://ccwart.co.kr/',
    shortName: '춘천',
    siteName: '후한의원 춘천점',
    bizName: '후한의원 춘천점',
    doctor: '김지유',
    phone: '033-242-7510',
    region: '강원특별자치도',
    city: '춘천시',
    street: '금강로 68-2 5층',
    twitterCard: 'summary_large_image',
    kakaoUrl: 'https://pf.kakao.com/_Bxakuu',
    aboutCondition: '편평사마귀',
    defaultCategory: '편평사마귀',
    defaultImage: 'assets/images/doctor-kim.jpg',
    photoClass: '',                        // 진료실 장면 사진이라 가운데 기준으로 자른다
    copyright: 'CHUNCHEON',
    github: { owner: 'gkwngml1215-code', repo: 'ccwart', branch: 'main' },
    tokenKey: 'hoo-chuncheon-admin-gh-token',   // 이 브라우저에 GitHub 키를 저장하는 이름
    storagePrefix: 'hoochuncheon',              // 이 브라우저에 설정·임시저장본을 저장하는 이름 앞부분
  };

  // 1~7번 SEO 설정 기본값 (이 브라우저에 저장된 값이 없을 때 쓰임)
  const DEFAULT_SETTINGS = {
    seoTitle: "춘천편평사마귀·쥐젖·검버섯 제거 | 후한의원 춘천점",
    seoDescription: "춘천 조양동 후한의원 춘천점 편평사마귀·쥐젖·비립종·검버섯 제거 - 코트라 플러스 CO2레이저와 침 치료를 병행해 흉터 부담을 줄이고 재발까지 관리합니다. 김지유 대표원장.",
    seoKeywords: "춘천편평사마귀, 춘천쥐젖, 춘천검버섯, 춘천비립종, 춘천사마귀, 춘천지루각화증, 후한의원 춘천점, 춘천 조양동 한의원",
    siteDomain: "https://ccwart.co.kr/",
    naverVerify: "",
    googleVerify: "",
    ogImage: "",
    ogSiteName: "후한의원 춘천점",
    ogType: "website",
    twitterCard: "summary_large_image",
    bizName: "후한의원 춘천점",
    bizDoctor: "김지유",
    bizPhone: "033-242-7510",
    bizStreet: "금강로 68-2 5층",
    bizCity: "춘천시",
    bizRegion: "강원특별자치도",
    bizPostal: "",
    bizLat: "",
    bizLng: "",
    bizPriceRange: "₩₩ (5,000원~)",
    bizSpecialty: "한의원 · 피부 병변 클리닉 (편평사마귀·쥐젖·비립종·지루각화증 제거)",
    hours: [
      {day:'월', code:'Mo', closed:false, open:'10:00', close:'20:30'},
      {day:'화', code:'Tu', closed:false, open:'10:00', close:'20:30'},
      {day:'수', code:'We', closed:true,  open:'10:00', close:'20:30'},
      {day:'목', code:'Th', closed:false, open:'10:00', close:'20:30'},
      {day:'금', code:'Fr', closed:false, open:'10:00', close:'20:30'},
      {day:'토', code:'Sa', closed:false, open:'09:00', close:'15:00'},
      {day:'일', code:'Su', closed:true,  open:'09:00', close:'15:00'},
    ],
    faqItems: [
      {q:'편평사마귀 제거 후 어떻게 관리하나요?', a:'시술 부위가 아물기까지 3~7일 정도는 재생 연고나 재생 밴드로 보호해 주세요. 딱지가 생기면 손으로 떼지 말고 자연스럽게 떨어질 때까지 기다려야 흉터·색소침착을 예방할 수 있습니다.'},
      {q:'쥐젖, 비립종, 검버섯도 같이 제거되나요?', a:'네, 정확한 감별 진단 후 편평사마귀와 함께 쥐젖·비립종·지루각화증(검버섯) 등을 동시에 제거할 수 있습니다. 병변 종류와 범위에 따라 추가 비용이 발생할 수 있어 상담 시 함께 확인해 드립니다.'},
      {q:'레이저와 침 치료를 왜 함께 진행하나요?', a:'병변마다 크기와 깊이가 다르기 때문입니다. 크고 깊은 병변은 침으로 뿌리까지 정리하고, 표면의 작은 병변은 코트라 플러스 CO2레이저로 정밀하게 마무리해 주변 피부 손상과 흉터 부담을 줄입니다.'},
      {q:'치료 후 화장은 언제부터 가능한가요?', a:'재생 밴드를 붙인 경우 겉면 위로는 다음 날부터 가벼운 화장이 가능합니다. 밴드를 붙이지 않았다면 미세한 상처가 있을 수 있어 며칠간 자극을 피하는 것이 좋습니다. 정확한 시기는 시술 후 안내드립니다.'},
      {q:'주말이나 평일 저녁에도 진료하나요?', a:'후한의원 춘천점은 월·화·목·금 10:00~20:30(점심 12:30~14:00) 진료해 퇴근 후 방문도 가능합니다. 토요일은 09:00~15:00 점심시간 없이 진료하며, 수요일과 일요일은 휴진입니다.'},
    ],
    bots: [
      {name:'GPTBot', label:'GPTBot (OpenAI 학습/검색)', allow:true},
      {name:'ChatGPT-User', label:'ChatGPT-User (OpenAI 사용자 열람)', allow:true},
      {name:'OAI-SearchBot', label:'OAI-SearchBot (OpenAI 검색 노출)', allow:true},
      {name:'Google-Extended', label:'Google-Extended (Google AI 답변)', allow:true},
      {name:'PerplexityBot', label:'PerplexityBot (Perplexity)', allow:true},
      {name:'ClaudeBot', label:'ClaudeBot (Anthropic 크롤러)', allow:true},
      {name:'anthropic-ai', label:'anthropic-ai (Anthropic)', allow:true},
      {name:'Applebot-Extended', label:'Applebot-Extended (Apple Intelligence)', allow:true},
      {name:'CCBot', label:'CCBot (Common Crawl, 다수 LLM 학습원)', allow:true},
      {name:'Bytespider', label:'Bytespider (ByteDance)', allow:false},
    ],
    llmsSummary: "강원특별자치도 춘천시 조양동에 위치한 후한의원 춘천점은 코트라 플러스 CO2레이저와 침 치료를 병행해 편평사마귀·쥐젖·비립종·지루각화증(검버섯)을 제거하고 재발까지 관리하는 한의원입니다.",
    llmsDetail: "",
    lastmod: "2026-10-19",
  };

  const api = {SITE: SITE, DEFAULT_SETTINGS: DEFAULT_SETTINGS};
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.HOO_SITE = SITE; root.HOO_DEFAULT_SETTINGS = DEFAULT_SETTINGS; }
})(typeof globalThis !== 'undefined' ? globalThis : this);
