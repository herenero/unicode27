import { site } from './site';

// 일정과 장소가 확정되면 value를 변경하세요.
export const participation = [
  { id: 'date', label: '행사 일정', value: '추후 공개' },
  { id: 'venue', label: '행사 장소', value: '추후 공개' },
  { id: 'registration', label: '참가 신청', value: '오픈 준비 중', showDot: true },
];
export const participationNote =
  '일정과 장소, 참가 방법이 확정되면 이곳에서 안내드릴게요.';
export const faqs = [
  {
    id: 'audience',
    question: '누가 함께할 수 있나요?',
    answer:
      '게임 개발에 관심 있는 분들을 위한 자리입니다. 구체적인 참가 대상과 신청 조건은 공식 참가 안내와 함께 공개됩니다.',
  },
  {
    id: 'registration',
    question: '참가 신청은 언제 시작되나요?',
    answer: `${site.name} ${site.edition} 참가 신청 일정은 아직 공개되지 않았습니다. ${site.host} 공식 인스타그램과 이 사이트에서 새로운 소식을 확인해주세요.`,
  },
  {
    id: 'replay',
    question: '지난 행사 강연을 볼 수 있나요?',
    answer: `네, 아래 아카이브에서 ${site.name} ${site.archive.edition}의 세션 다시보기를 확인할 수 있습니다.`,
  },
];
