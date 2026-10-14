# UNICODE 27

React 19 + Vite 6로 만든 행사 안내 사이트입니다. 직접 내용을 작성하기 쉽도록 **행사 데이터**, **섹션 화면**, **스타일**을 분리했습니다.

## 시작하기

```sh
npm install
npm run dev
```

미리보기 주소: http://127.0.0.1:4173

```sh
npm run build         # dist/에 배포 파일 생성
npm run preview       # 빌드 결과 확인
npm run format        # 들여쓰기와 줄바꿈 자동 정리
npm run format:check  # 코드 정리 상태 확인
```

## 무엇을 어디에서 수정하나요?

| 수정할 내용                                          | 파일                              |
| ---------------------------------------------------- | --------------------------------- |
| 행사 회차, 주최명, 이메일, 공식 채널, 지난 행사 링크 | `src/data/site.js`                |
| 상단 메뉴 이름과 이동 위치                           | `src/data/site.js`의 `navigation` |
| 프로그램 카드 제목·설명·상태, 카드 추가/삭제         | `src/data/programs.js`            |
| 일정, 장소, 신청 상태, FAQ                           | `src/data/participation.js`       |
| 메인 문구와 타이포그래피 구성                        | `src/sections/Hero.jsx`           |
| 행사 소개 문구와 포스터                              | `src/sections/About.jsx`          |
| 프로그램 영역 제목과 카드 배치                       | `src/sections/Program.jsx`        |
| 참가 안내 영역 제목과 FAQ 배치                       | `src/sections/Guide.jsx`          |
| 지난 행사 안내 문구                                  | `src/sections/Archive.jsx`        |
| 새로운 소식 안내 문구                                | `src/sections/Updates.jsx`        |
| 섹션 순서, 섹션 추가/삭제                            | `src/App.jsx`                     |
| 상단 메뉴와 푸터 구성                                | `src/components/layout/`          |
| 기본 색상 변수와 글꼴                                | `src/styles/base.css`             |
| 버튼·공통 제목·공통 여백                             | `src/styles/shared.css`           |
| 메뉴·푸터 스타일                                     | `src/styles/layout.css`           |
| 섹션별 디자인                                        | `src/styles/sections.css`         |
| 모바일·태블릿 화면                                   | `src/styles/responsive.css`       |
| 브라우저 탭 제목, 검색 설명, 테마 색상               | `index.html`                      |
| 포스터와 배경 이미지                                 | `public/assets/`                  |

`site.edition` 변경 시 화면의 회차 표기가 함께 바뀝니다. 브라우저 탭 제목·검색 설명(`index.html`)과 이미지 안에 그려진 숫자는 별도로 수정해야 합니다. 행사명 로고의 UNI/C/O/D/E 조형은 `Hero.jsx`와 `Header.jsx`에 직접 작성되어 있습니다.

## 구조

```text
unicode27/
├── public/assets/           # 제공된 이미지
├── src/
│   ├── App.jsx              # 화면 조립과 섹션 순서
│   ├── main.jsx             # React 진입점
│   ├── data/                # 자주 수정하는 행사 정보
│   │   ├── site.js
│   │   ├── programs.js
│   │   └── participation.js
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   └── common/          # 장식 문구 Ticker
│   ├── sections/            # Hero, About, Program, Guide, Archive, Updates
│   └── styles/              # index.css가 스타일을 순서대로 불러옴
├── index.html
├── vite.config.js
└── package.json
```

## 일정과 장소 수정 예시

`src/data/participation.js`에서 해당 항목의 `value`를 바꾸면 화면에 반영됩니다.

```js
{ id: 'venue', label: '행사 장소', value: '확정된 장소를 입력하세요' }
```

FAQ는 `faqs` 배열의 `question`, `answer`를 수정합니다. 항목을 추가하거나 삭제하면 화면에도 자동 반영됩니다. 각 항목의 `id`는 배열 내에서 중복되지 않아야 합니다.

프로그램은 `programs` 배열에 같은 형태의 객체를 추가하세요. 표시 번호는 자동으로 붙으며 `description` 배열의 각 문장은 줄바꿈됩니다. 프로그램 개수를 바꾸면 `Program.jsx`의 “세 가지 경험” 문구도 함께 수정하세요.

## 섹션과 이미지 수정

새 섹션을 `src/sections/`에 만든 뒤 `App.jsx`에서 불러와 원하는 위치에 추가합니다. 상단 메뉴도 필요하면 `navigation` 배열에 링크를 추가하세요. 예를 들어 `href: '#speakers'`는 새 섹션의 `id="speakers"`와 일치해야 합니다.

이미지는 `public/assets/`에 넣고 `/assets/파일명.png`로 참조합니다. 포스터는 `About.jsx`, 소식 영역 배경은 `styles/sections.css`의 `.updates`에서 지정합니다.

## 스타일 수정 순서

`styles/index.css`는 기본 → 공통 → 메뉴/푸터 → 섹션 → 반응형 순으로 불러옵니다. PC 디자인은 해당 파일에서, 모바일에서만 달라지는 값은 `responsive.css`에서 수정하세요. 마지막에 불러온 같은 우선순위의 규칙이 적용됩니다. 색상은 `base.css`의 `--paper`, `--ink`, `--blue`, `--line`부터 조정하면 됩니다.

서체는 Google Fonts에서 불러오며 연결이 없으면 시스템 글꼴로 표시됩니다.

## 배포와 현재 기능

`npm run build`로 생성한 `dist/`를 정적 호스팅에 배포합니다. `dist/`와 `node_modules/`는 직접 수정하지 마세요. 현재 Sites 배포 연결은 `.openai/hosting.json`에 저장되어 있습니다. 단순 로컬 실행에는 이 파일을 수정할 필요가 없습니다.

일정·장소·신청 정보는 아직 미확정 상태입니다. 현재 참가 신청 접수, 개인정보 저장, 관리자 기능은 없습니다. 신청을 시작할 때는 확정된 신청 폼 링크나 별도 접수 기능을 연결해야 합니다. 기존 행사 정보와 다시보기 링크는 https://unicode.unidev.kr/ 를 참고했습니다.
