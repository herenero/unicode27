import { site } from '../data/site';

export default function Archive() {
  return (
    <section id="archive" className="archive">
      <div className="archive-art" aria-hidden="true">
        <span>{site.archive.edition}</span>
        <small>THE STORIES CONTINUE.</small>
      </div>
      <div className="archive-copy">
        <div className="section-label">04 / ARCHIVE</div>
        <h2>
          지난 영감이,
          <br />
          다음 시작으로.
        </h2>
        <p>
          {site.name} {site.archive.edition}에서 나눴던 이야기들.
          <br />
          놓쳤던 세션과 다시 듣고 싶은 순간을 만나보세요.
        </p>
        <a
          className="button dark"
          href={site.archive.replay}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.archive.edition} 세션 다시보기 <span>↗</span>
        </a>
        <a
          className="archive-link"
          href={site.archive.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          지난 행사 사이트 방문 ↗
        </a>
      </div>
    </section>
  );
}
