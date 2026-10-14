import { site } from '../data/site';

export default function Updates() {
  return (
    <section id="updates" className="section updates">
      <div className="section-label">STAY IN THE LOOP</div>
      <h2>
        우리의 다음 챕터,
        <br />
        함께해요<span className="blue">.</span>
      </h2>
      <p>
        {site.name} {site.edition}의 새로운 소식을 가장 가까이에서.
      </p>
      <a
        className="button dark"
        href={site.links.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        UNIDEV 소식 확인하기 <span>↗</span>
      </a>
    </section>
  );
}
