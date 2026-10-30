// 날짜, 시간, 제목, 소개, 연사를 이 파일에서 수정하세요.
// 세션은 배열 순서대로 표시됩니다. 추가하거나 복사할 때 id는 고유하게 지정하세요.
// 제목의 원하는 위치에 \n을 넣으면 줄바꿈됩니다. 예: '첫 번째 줄\n두 번째 줄'
export const sessionPage = {
  title: '세션 소개',
};

export const sessionDays = [
  {
    id: 'day-1',
    date: '11월 7일(토)',
    sessions: [
      {
        id: 'day-1-session-1',
        time: '11:00 - 11:40',
        title: '초개인화 시대의 게임 개발',
        speaker: '박상준 이사 / 컴투스',
      },
      {
        id: 'day-1-session-2',
        time: '12:00 - 12:40',
        title: 'AI와 함께 게임을 만든다는 것',
        speaker: '강삼세 CSO / 하운드13',
      },
      {
        id: 'day-1-session-3',
        time: '14:00 - 14:40',
        title: '<스테퍼 레트로> 기획부터 QA까지, 게임의 품질을 높이는 과정',
        speaker: '김준하 / 팀 테트라포드',
      },
      {
        id: 'day-1-session-4',
        time: '15:00 - 15:40',
        title: 'AI 시대의 UI 개발 파이프라인',
        speaker: '이동호 리드 프로그래머 / 로망띠씨모',
      },
      {
        id: 'day-1-session-5',
        time: '16:00 - 16:40',
        title: 'Unity CLI의 활용사례와 AI 게임개발의 방향성',
        speaker: '김범주 본부장 / 유니티 코리아',
      },
    ],
  },
  {
    id: 'day-2',
    date: '11월 8일(일)',
    sessions: [
      {
        id: 'day-2-session-1',
        time: '11:00 - 11:40',
        title: '성공한 게임 개발사의 공통점: "3의 법칙"',
        speaker: '오영제 팀장 / 뒤끝',
      },
      {
        id: 'day-2-session-2',
        time: '12:00 - 12:40',
        title: 'Logging과 Funnel의 중요성',
        speaker: '신대성 / 팀 아르까',
      },
      {
        id: 'day-2-session-3',
        time: '14:00 - 14:40',
        title: '<셰이프 오브 드림즈>에 담긴 의도 + 퍼블리셔들은 뭐하는 사람들일까?',
        speaker: '심은섭 대표 / 리자드 스무디',
      },
      {
        id: 'day-2-session-4',
        time: '15:00 - 15:40',
        title:
          'Game Designer에서 AI Game Design Advisor를 거쳐 Creative Director가 되기까지.',
        speaker: '공솔 Creative Director / 블루홀 스튜디오(크래프톤)',
      },
    ],
  },
];
