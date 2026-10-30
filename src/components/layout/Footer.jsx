import { sitePath } from '../../utils/paths';
import { site } from '../../data/site';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <a className="brand" href={sitePath('about/')}>
          {site.name} {site.edition}
        </a>
        <a href={`mailto:${site.email}`}>{site.email} ↗</a>
      </div>
      <div className="footer-bottom">
        <span>© {site.host}. All rights reserved.</span>
        <div>
          <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">
            INSTAGRAM ↗
          </a>
          <a href={site.links.kakao} target="_blank" rel="noopener noreferrer">
            KAKAO TALK ↗
          </a>
          <a href="#">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
