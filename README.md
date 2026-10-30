# UNICODE 27

React 19 + Vite 6 행사 안내 사이트입니다. 메인 행사 개요(`/`), 세션 소개(`/program/`), 오시는 길(`/guide/`)로 구성됩니다. 커스텀 도메인 `https://unicode.unidev.kr/`가 메인입니다.

## 실행 및 검증

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run format:check
```

개발 서버 주소는 터미널에 표시됩니다. 빌드 미리보기는 http://127.0.0.1:4173 입니다.

## 수정 위치

| 내용                                   | 파일                        |
| -------------------------------------- | --------------------------- |
| 행사명, 회차, 주최, 공식 채널, 메뉴    | `src/data/site.js`          |
| 날짜별 세션, 시간, 제목, 연사          | `src/data/sessions.js`      |
| 행사 장소                              | `src/data/participation.js` |
| UNIDEV 소개 문구                       | `src/data/organization.js`  |
| Hero 이미지, 일정 문구, 세션 이동 버튼 | `src/sections/Hero.jsx`     |
| 행사 사진 슬라이더                     | `src/sections/About.jsx`    |
| 세션 카드, 모바일 날짜 선택            | `src/sections/Program.jsx`  |
| 지도 검색 주소, 교통 안내, 길찾기      | `src/sections/Guide.jsx`    |
| 내부 페이지 이동                       | `src/App.jsx`               |
| 디자인                                 | `src/styles/`               |
| 사용 이미지                            | `public/assets/`            |

세션 제목에는 `\n`을 넣어 수동 줄바꿈할 수 있습니다. 긴 제목과 연사 정보는 공간에 맞게 글자 크기가 조절됩니다.

`site.edition`을 변경해도 이미지에 그려진 회차는 변경되지 않습니다. 브라우저 제목과 검색 설명은 루트 및 `program/`, `guide/`의 `index.html`에서 수정합니다.

## 구글 지도

로컬에서는 `.env.local`에 아래 값을 설정합니다. `.env.example`은 설정 형식 예시이며 실제 키는 Git에 포함하지 않습니다.

```dotenv
VITE_GOOGLE_MAPS_API_KEY=발급받은_API_키
```

별도 빌드 서버에서도 같은 환경변수를 설정해야 합니다. Vite는 빌드 시 값을 반영하므로 변경 후 다시 빌드해야 합니다. Maps Embed API가 활성화된 키를 사용합니다. 브라우저용 키는 빌드 결과에 포함되므로 Google Cloud에서 배포 도메인 및 사용 API 제한을 설정합니다.

## 배포

GitHub Pages는 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정합니다. `main`에 푸시하면 `.github/workflows/jekyll-gh-pages.yml`이 Node로 Vite를 빌드하고 `dist/`를 배포합니다. 파일명은 기존 것을 유지하지만 Jekyll은 사용하지 않습니다. 현재 커스텀 도메인 `unicode.unidev.kr`에 맞춰 빌드 경로를 `/`로 지정합니다. 도메인 변경 후에는 반드시 다시 빌드·배포해야 합니다. 저장소 하위 주소로 되돌릴 경우 워크플로의 `VITE_BASE_PATH`를 `/unicode27/`로 변경하세요.

지도 사용 시 Settings → Secrets and variables → Actions에서 `VITE_GOOGLE_MAPS_API_KEY`라는 Repository secret에 API 키를 등록합니다. 로컬 `.env.local`은 GitHub 빌드에 전달되지 않습니다.

로컬에서 하위 경로를 검증하려면 `npm run build -- --base=/unicode27/`로 빌드한 다음 `npm run preview`를 실행해 `/unicode27/` 주소를 확인합니다.

`npm run build`가 생성한 `dist/` 전체를 정적 호스팅에 배포합니다. 세 페이지의 직접 접근과 새로고침을 위해 하위 폴더의 HTML도 함께 배포해야 합니다. `node_modules/`, `.env.local`, 소스 파일은 배포 결과에 복사하지 않습니다.

빌드 후 확인할 항목: 페이지 이동 및 뒤로 가기, 모바일 메뉴와 날짜 선택, 사진 슬라이더, 지도 및 길찾기 링크.

`dist/`는 생성 결과이며 직접 수정하지 않습니다. `.openai/`의 기존 호스팅 설정은 유지합니다. 참가 신청 접수·개인정보 저장·관리자 기능은 현재 구현되어 있지 않습니다.
