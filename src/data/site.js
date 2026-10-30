// 행사 기본 정보와 외부 링크. 탭 제목과 검색 설명은 index.html에서 수정하세요.
export const site = {
  name: 'UNICODE',
  edition: '27',
  host: 'UNIDEV',
  // public/assets에 이미지를 넣고 '/assets/파일명.png' 또는 이미지 URL을 지정하세요.
  hostImage: '/assets/unidev.JPG',
  hostLogo: '/assets/unidev_logo.png',
  email: 'officialunidev@gmail.com',
  links: {
    instagram: 'https://www.instagram.com/unidev.official/',
    kakao: 'https://pf.kakao.com/_LxgSvn',
  },
};

// 각 페이지의 독립 주소입니다.
export const navigation = [
  { href: '/about/', label: '행사 개요' },
  { href: '/program/', label: '세션 소개' },
  { href: '/guide/', label: '오시는 길' },
];
