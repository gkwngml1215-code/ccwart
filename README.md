# 후한의원 춘천점 편평사마귀·쥐젖·검버섯 랜딩페이지

제주점(`hoo-jeju-landing`)과 동일한 구조로 만든 춘천점 사이트입니다 (2026-10-16).
`index.html` 하나로 완성되어 있고(Tailwind CSS는 CDN), 제주점의 **점 제거** 섹션 자리에 **지루각화증(검버섯)** 섹션이 들어가 있습니다.

**치료 방식이 제주점과 다릅니다.** 춘천점은 전주점처럼 **코트라 플러스 CO2레이저 + 침 치료를 병행**합니다.
- 편평사마귀: 레이저 + 침 동시 진행
- 쥐젖: 레이저 제거
- 비립종: 미세 절개 후 압출
- 지루각화증(검버섯): 침 제거 + 레이저 (크고 깊으면 침, 작고 얕으면 레이저)

---

## 1. VS Code에서 열기

1. 이 폴더(`hoo-chuncheon-landing`) 전체를 VS Code로 엽니다. (`파일 > 폴더 열기`)
2. 확장 프로그램에서 **Live Server** 설치
3. `index.html`을 열고, 우클릭 → **Open with Live Server**

---

## 2. 폴더 구조

```
hoo-chuncheon-landing/
├─ index.html              # 랜딩페이지 전체
├─ columns.html            # 원장 컬럼 목록 (아직 글 없음 — 어드민에서 발행하면 채워짐)
├─ columns/
│  ├─ index.json             # 컬럼 목록 원본 (비어 있음)
│  └─ data/                  # 글마다 편집용 원본 값
├─ assets/images/
│  ├─ hero-main.jpg          # 히어로 이벤트 배너 (이미지/hero-main.sgv.png → 1200px)
│  ├─ doctor-kim.jpg         # 김지유 대표원장 프로필 사진 (이미지/doctor-kim.sgv.jpg → 900px)
│  ├─ treatment-scene.jpg    # 레이저 시술 장면 (이미지/시술장면.jpg)
│  ├─ treatment-laser.png    # 코트라 CO2레이저 장비 (이미지/코트라_co2_누끼)
│  ├─ sk-method.jpg          # 지루각화증 케어 시술 방법 그래픽 (이미지/지루각화증 치료법.png)
│  ├─ wart1~8-before/after.jpg     # 편평사마귀 전후 (전후사진/편평사마귀 1·2·4·5·6·8(2건)·9)
│  ├─ wart9~12-before/after.jpg    # 편평사마귀 전후 (제주·전주점과 공용 4건)
│  ├─ skintag1-before/after.jpg    # 쥐젖 전후 (전후사진/쥐젖/10)
│  ├─ sk1~3-before/after.jpg       # 지루각화증(검버섯) 전후 (전후사진/지루각화증 검버섯 1~3)
│  └─ milium1·2-before/after.jpg   # 비립종 전후 (제주점과 동일)
├─ CNAME                   # ccwart.co.kr (★ 실제 도메인 확정 후 수정)
├─ robots.txt / sitemap.xml / llms.txt
├─ .github/                # 컬럼 목록 자동 점검 (전주·제주점과 동일)
└─ 사이트에-올리기.bat      # git add/commit/push 한 번에
```

---

## 3. 게시 전 반드시 확인·교체할 것

- [x] **도메인** — `ccwart.co.kr` 확정 (가비아 구매, 2026-10-19). 연결 절차는 `도메인-깃허브-연결-순서.md`.
- [x] **비용(`#cost`)** — `후한의원 춘천점 수가.png`(10월 잡티제거 EVENT) 기준으로 반영 완료. 2mm 이하 1부위 기준, VAT 별도.
- [x] **원장 사진·약력(`#doctor`)** — 김지유 대표원장 사진·경력·학력·학회·논문 반영 완료 (2026-10-16).
- [x] **진료시간** — 공식 사이트(cc.hooclinic.co.kr) 기준: 월·화·목·금 10:00–20:30 (점심 12:30–14:00), 토 09:00–15:00 점심 없음, 수·일 휴진.
- [x] **주소·전화·카카오** — 강원특별자치도 춘천시 금강로 68-2 5층 / 033-242-7510 / pf.kakao.com/_Bxakuu (공식 사이트 기준)
- [x] **상담 신청 버튼** — 히어로·플로팅 버튼 모두 cc.hooclinic.co.kr/clinicPrice/eventList.php?cate=1691 로 연결 (2026-10-16).
- [ ] **네이버 예약 버튼** — 현재 네이버 지도 검색(후한의원 춘천점) 링크입니다. 네이버 예약 URL이 있으면 교체하세요.
- [x] **서치콘솔 소유확인 메타태그** — 네이버·구글 코드 반영 완료 (2026-10-19).
- [ ] **의료광고 고지 문구** — 전후사진 하단 "개인에 따라 시술 효과는 차이가…" 문구는 삭제하지 마세요.

---

## 4. 배포 (완료 — 2026-10-19)

1. GitHub `gkwngml1215-code/ccwart` main 브랜치 ← 이 폴더 (완료)
2. Cloudflare Pages `ccwart` + 도메인 ccwart.co.kr·www (완료)
3. 이후 수정은 `사이트에-올리기.bat` 더블클릭
4. 컬럼 5편 발행됨 (2026-10-19). 이후 컬럼은 어드민(ccwart-admin.pages.dev)에서 발행

어드민(컬럼 발행 도구)은 `../hoo-chuncheon-admin` (ccwart 저장소 admin 브랜치). 설치 절차는 그 폴더의 `어드민-설치-순서.md`.
(전주·강남 어드민 폴더는 건드리지 않습니다.)
