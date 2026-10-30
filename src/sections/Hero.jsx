import { sitePath } from '../utils/paths';
import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1
        id="hero-title"
        className="hero-word"
        aria-label={`${site.name} ${site.edition}`}
      >
        <img
          className="hero-title-image"
          src={sitePath('assets/unicode_title.png')}
          alt={`${site.name} ${site.edition}`}
          width="7929"
          height="1185"
          fetchPriority="high"
        />
      </h1>
      <div className="hero-bottom">
        <div>
          <p className="hero-korean">UNIDEV Conference of Developers & Engineers</p>
          <p className="hero-info">
            11.07 - 11.08 <br />
            74, Gwacheon-daero 7 Gwacheon-si, Gyeonggi-do
            <br />
            B1 Auditorium
          </p>
          <a className="button dark hero-session-link" href={sitePath('program/')}>
            세션 보러 가기 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-note">
          {site.hostImage && (
            <div className="host">
              <p>Hosted by</p>
              <img
                className="host-image"
                src={site.hostLogo}
                alt={`주최: ${site.host}`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
