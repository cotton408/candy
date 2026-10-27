# 사라진 사탕을 찾아서

메이플턴의 할로윈 판타지를 소개하는 반응형 정적 랜딩 페이지입니다. HTML, CSS, JavaScript만 사용하며 빌드나 패키지 설치가 필요 없습니다.

## 실행

`index.html`을 브라우저에서 열거나 정적 웹 서버로 실행하세요. 폰트는 Google Fonts의 Gaegu(개구)와 Noto Sans KR을 사용합니다. 인터넷 연결이 없으면 시스템 폰트로 표시됩니다.

## GitHub Pages 배포

1. 원하는 GitHub 저장소의 루트에 `index.html`, `style.css`, `script.js`, `.nojekyll`을 업로드합니다.
2. 저장소 Settings → Pages → Build and deployment에서 Deploy from a branch를 선택합니다.
3. 업로드한 브랜치와 `/(root)`를 선택하고 저장합니다.
4. 배포가 완료되면 Pages 화면의 사이트 주소에서 확인합니다.

상대 경로를 사용하므로 사용자 사이트와 저장소 하위 경로 사이트 모두 지원합니다. 이 결과물에는 실제 GitHub 배포나 AI 대화 서비스 연결이 포함되어 있지 않습니다.

## 수정 위치

- 이미지: 캐릭터 카드는 제공된 ywoo.uk 이미지 URL을 직접 사용합니다. 인터넷 연결과 원본 이미지 서버가 필요합니다. 메인 비주얼은 제공된 GitHub 이미지 2장을 5초 간격으로 페이드 전환합니다. 선택 버튼을 지원하며 움직임 줄이기 설정에서는 자동 재생을 끕니다. 이미지 주소는 index.html의 각 .character-image img에서 변경할 수 있습니다.
- 캐릭터 상세 설명 / 탑 1~10층: `script.js`의 `profiles`, `floors`를 수정하세요.
- 색 / 폰트 / 모바일 레이아웃: `style.css`를 수정하세요.

캐릭터 상세창은 페이드 전환, Esc 닫기, 바깥 클릭 닫기, 키보드 포커스 복귀를 지원합니다. 움직임 줄이기 설정을 존중합니다.
