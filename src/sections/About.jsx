import { site } from '../data/site';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-label">01 / ABOUT UNICODE</div>
      <div className="about-grid">
        <div>
          <h2>
            우리의 다음 게임은,
            <br />이 만남에서 시작됩니다<span className="blue">.</span>
          </h2>
          <p className="body-copy">
            혼자 고민하던 아이디어가 누군가의 경험을 만나
            <br className="desktop" /> 새로운 가능성으로 이어지는 순간.
          </p>
          <p className="body-copy">
            UNICODE는 게임을 만드는 사람들이 경험과 영감을 나누는 인디 게임 개발자
            컨퍼런스입니다. 각자의 코드와 이야기가 모여, 함께 만드는 내일을 이야기합니다.
          </p>
          <a className="text-link" href="#program">
            함께할 경험 살펴보기 <span>↘</span>
          </a>
        </div>
        <figure className="poster">
          <img
            src="/assets/poster.png"
            alt={`푸른빛과 노란빛이 번지는 ${site.name} ${site.edition} 그래픽`}
            loading="lazy"
          />
          <figcaption>
            DIFFERENT CODES. ONE COMMUNITY.
            <span>
              {site.name} / {site.edition}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
