import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="eyebrow">
        <span className="live-dot"></span> INDIE GAME DEVELOPER CONFERENCE{' '}
        <span className="edition">THE NEXT CHAPTER / {site.edition}</span>
      </div>
      <h1
        id="hero-title"
        className="hero-word"
        aria-label={`${site.name} ${site.edition}`}
      >
        <span>UNI</span>
        <span className="moving c">C</span>
        <span>O</span>
        <span className="moving d">D</span>
        <span>E</span>
        <span className="year">{site.edition}</span>
      </h1>
      <div className="hero-bottom">
        <div>
          <p className="hero-korean">
            서로 다른 코드,
            <br />
            하나의 가능성.
          </p>
          <p className="hero-description">
            게임을 만드는 우리의 이야기.
            <br />
            배움과 영감, 그리고 새로운 연결이 시작되는 곳.
          </p>
          <a className="button dark" href="#about">
            UNICODE 만나보기 <span>↗</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="mini-label">MADE OF DIFFERENT CODES.</span>
          <span>CONNECTED BY ONE PASSION.</span>
          <div className="host">
            HOSTED BY{' '}
            <strong>
              <span className="host-icon">◈</span> {site.host}
            </strong>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll">
        SCROLL TO EXPLORE <span>↓</span>
      </a>
      <span className="hero-cross" aria-hidden="true">
        +
      </span>
    </section>
  );
}
