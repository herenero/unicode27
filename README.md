# UNICODE 27

React 19 + Vite 6로 만든 반응형 UNICODE 행사 사이트입니다.

## 실행

```sh
npm install
npm run dev
```

개발 서버: http://127.0.0.1:4173

```sh
npm run build
npm run preview
```

배포 산출물은 `dist/`에 생성됩니다. 정적 호스팅에 배포할 수 있습니다.

## 구성

- `src/App.jsx`: Hero, About, Program, Guide, Archive, Updates 컴포넌트 및 메뉴 상태
- `src/style.css`: 반응형 레이아웃, 도트 패턴, 타이포그래피와 색 번짐
- `public/assets/`: 제공된 배경 이미지
- `.openai/hosting.json`: Sites 비공개 배포 설정

첨부 시안의 27 표기를 기준으로 구성했습니다. 일정·장소·연사·신청 URL은 미확정 상태로 표시하며, 확정 후 App.jsx에서 수정할 수 있습니다. 현재 신청 접수나 개인정보 수집은 구현하지 않았습니다. 지난 행사 다시보기와 공식 소셜 채널은 기존 https://unicode.unidev.kr/ 에서 확인한 링크를 사용합니다. 서체는 Google Fonts에서 불러오며 네트워크 연결이 없으면 시스템 글꼴로 표시됩니다.

## 검증

- Vite 프로덕션 빌드 성공
- PC 및 390px 모바일 화면 가로 넘침 없음
- 모바일 메뉴 열기와 링크 선택 후 닫기 확인
- FAQ 펼치기, 이미지 로딩, 브라우저 오류 없음 확인
