// 행사 기본 정보와 외부 링크. 탭 제목과 검색 설명은 index.html에서 수정하세요.
export const site = {
  name: 'UNICODE',
  edition: '27',
  host: 'UNIDEV',
  tagline: '서로 다른 코드, 하나의 가능성.',
  email: 'officialunidev@gmail.com',
  links: {
    instagram: 'https://www.instagram.com/unidev.official/',
    kakao: 'https://pf.kakao.com/_LxgSvn',
  },
  archive: {
    edition: '26',
    website: 'https://unicode.unidev.kr/',
    replay:
      'https://www.youtube.com/playlist?list=PLJGO6Gt24pG41wLsdQze_2w6yPWfp2buG&si=BUyN1F376_OZC9mN',
  },
};

// href는 해당 섹션의 id와 일치해야 합니다.
export const navigation = [
  { href: '#about', label: '행사 소개' },
  { href: '#program', label: '프로그램' },
  { href: '#guide', label: '참가 안내' },
  { href: '#archive', label: '아카이브' },
  { href: '#updates', label: '새로운 소식', highlighted: true },
];
