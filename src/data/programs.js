// 항목 추가 시 카드가 자동으로 추가됩니다. id는 중복되지 않게 작성하세요.
// description 배열의 각 항목은 화면에서 줄바꿈으로 구분됩니다.
export const programs = [
  {
    id: 'inspire',
    icon: '↗',
    label: 'INSPIRE',
    title: '경험을 나누는 세션',
    description: [
      '개발 과정의 고민부터 새로운 시도까지.',
      '게임을 만드는 사람들의 이야기를 만납니다.',
    ],
    status: '세부 세션 추후 공개',
  },
  {
    id: 'discover',
    icon: '✳',
    iconClassName: 'pixels',
    label: 'DISCOVER',
    title: '새로운 영감의 발견',
    description: [
      '서로 다른 아이디어와 시선이 만나는 곳.',
      '당신의 다음 도전을 위한 영감을 발견합니다.',
    ],
    status: '상세 프로그램 추후 공개',
  },
  {
    id: 'connect',
    icon: '↔',
    label: 'CONNECT',
    title: '함께 만드는 연결',
    description: ['같은 열정, 서로 다른 경험.', '게임이라는 공통의 언어로 연결됩니다.'],
    status: '참여 안내 추후 공개',
  },
];
