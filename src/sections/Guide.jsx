import { participation } from '../data/participation';

export default function Guide() {
  const venue = participation.find(({ id }) => id === 'venue');
  const address = '경기도 과천시 과천대로7길 74 메가존산학연센터';
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?${new URLSearchParams({
    key: apiKey || '',
    q: address,
    zoom: '16',
    language: 'ko',
  })}`;
  return (
    <section id="guide" className="section guide">
      <div className="section-label">03 / 오시는 길</div>
      <div className="guide-grid">
        <h1>오시는 길</h1>
        <div>
          <div className="info-row">
            <span>행사 장소</span>
            <strong>{venue.value}</strong>
          </div>
          <p className="guide-note">
            4호선 정부과천청사역 하차 <br />→ 3번출구 앞 정류장에서 버스 탑승 → 도보
            5~10분
          </p>
        </div>
      </div>
      {apiKey && (
        <iframe
          className="guide-map"
          title="메가존산학연센터 위치 지도"
          src={mapUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
      <a
        className="text-link guide-map-link"
        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        구글 지도에서 길찾기 <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
