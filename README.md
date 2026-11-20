# works

따로 만든 작업물 포트폴리오(HTML)를 한곳에 모아 GitHub Pages로 보여 주는 저장소입니다.
첫 화면(`index.html`)은 `works.js`에 적은 목록을 카드로 보여 줍니다.

## 폴더 구조

```
index.html        목록 첫 화면 (고칠 일 거의 없음)
works.js          프로필과 작업물 목록 ← 여기만 고치면 됩니다
assets/           첫 화면의 스타일·스크립트
works/
  <작업물>/       작업물마다 폴더 하나
    index.html    따로 만든 포트폴리오 HTML
    thumb.png     카드에 쓸 썸네일 (선택, 16:10 비율 권장)
    ...           그 페이지가 쓰는 이미지 등
```

## 작업물 추가하기

1. `works/` 아래에 폴더를 만들고(예: `works/daydeck/`) 포트폴리오 HTML을 `index.html`로 넣습니다.
   그 페이지가 쓰는 이미지·CSS도 같은 폴더에 넣고 상대 경로(`./img/a.png`)로 연결합니다.
2. `works.js`의 `WORKS` 배열 맨 위에 항목을 추가합니다.

```js
{
  title: "작업물 이름",
  summary: "한두 문장 소개",
  tags: ["웹 서비스", "AI"],
  date: "2026-11",
  status: "운영 중",
  page: "works/daydeck/",          // 포트폴리오 HTML (없으면 "")
  thumb: "works/daydeck/thumb.png", // 썸네일 (없으면 "" → 이름 첫 글자 표시)
  service: "https://...",           // 실제 서비스 주소 (없으면 "")
  repo: "https://github.com/...",   // 공개 저장소 (없으면 "")
},
```

3. 커밋하고 푸시하면 1~2분 뒤 사이트에 반영됩니다.

프로필 이름·소개·링크는 `works.js` 위쪽의 `PROFILE`에서 바꿉니다.

## GitHub Pages 켜기 (처음 한 번)

저장소 **Settings → Pages → Build and deployment**에서
Source를 **Deploy from a branch**로, Branch를 사이트로 쓸 브랜치와 `/ (root)`로 고르고 저장합니다.
주소는 `https://aydenchoi.github.io/works/` 입니다.

## 내 컴퓨터에서 미리 보기

`index.html`을 브라우저로 바로 열어도 됩니다.
