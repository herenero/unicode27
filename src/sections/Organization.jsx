import { site } from '../data/site';
import { organization } from '../data/organization';

export default function Organization() {
  return (
    <section id="unidev" className="section organization" aria-labelledby="unidev-title">
      <div className="section-label">02 / UNIDEV 소개</div>
      <div className="organization-grid">
        <div className="organization-logo">
          <img src={site.hostImage} alt={site.host} loading="lazy" />
        </div>
        <div>
          <h2 id="unidev-title">{organization.heading}</h2>
          {organization.paragraphs.map((paragraph, index) => (
            <p className="body-copy" key={index}>
              {paragraph}
            </p>
          ))}
          <div className="organization-links">
            <a
              className="text-link"
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              공식 인스타그램 <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href={site.links.kakao}
              target="_blank"
              rel="noopener noreferrer"
            >
              카카오톡 채널 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
