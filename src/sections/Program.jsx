import { Fragment } from 'react';
import { programs } from '../data/programs';

export default function Program() {
  return (
    <section id="program" className="section program">
      <div className="section-label">02 / THE EXPERIENCE</div>
      <div className="section-heading">
        <h2>
          생각을 나누고,
          <br />
          가능성을 플레이하다.
        </h2>
        <p>
          UNICODE에서 이어질 세 가지 경험.
          <br />
          상세 프로그램과 연사 정보는 추후 공개됩니다.
        </p>
      </div>
      <div className="programs">
        {programs.map((program, index) => (
          <article key={program.id}>
            <span className="number">{String(index + 1).padStart(2, '0')}</span>
            <div
              className={`program-icon ${program.iconClassName ?? ''}`.trim()}
              aria-hidden="true"
            >
              {program.icon}
            </div>
            <p className="mini-label">{program.label}</p>
            <h3>{program.title}</h3>
            <p>
              {program.description.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
            <span className="status">{program.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
