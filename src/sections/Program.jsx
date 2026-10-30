import { sessionDays, sessionPage } from '../data/sessions';
import { useLayoutEffect, useRef, useState } from 'react';

function FittedText({ as: Tag, children, className }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    let disposed = false;
    const fit = () => {
      if (disposed) return;
      element.style.fontSize = '';
      const maximum = parseFloat(getComputedStyle(element).fontSize);
      for (let size = maximum; size >= 10; size -= 0.5) {
        element.style.fontSize = `${size}px`;
        if (
          element.scrollHeight <= element.clientHeight &&
          element.scrollWidth <= element.clientWidth
        )
          break;
      }
    };
    const observer = new ResizeObserver(fit);
    observer.observe(element);
    document.fonts.ready.then(fit);
    fit();
    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [children]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export default function Program() {
  const [activeDay, setActiveDay] = useState(sessionDays[0]?.id);

  return (
    <section id="program" className="section program">
      <div className="section-label">02 / 세션 소개</div>
      <h1>{sessionPage.title}</h1>
      <div className="session-day-tabs" role="group" aria-label="세션 날짜 선택">
        {sessionDays.map(({ id, date }, index) => (
          <button
            key={id}
            type="button"
            aria-pressed={activeDay === id}
            aria-controls={`${id}-sessions`}
            onClick={() => setActiveDay(id)}
          >
            <span>DAY {String(index + 1).padStart(2, '0')}</span>
            {date}
          </button>
        ))}
      </div>
      <div className="session-schedule">
        {sessionDays.map(({ id, date, sessions }, dayIndex) => (
          <section
            key={id}
            id={`${id}-sessions`}
            className="session-day"
            data-active={activeDay === id}
            aria-labelledby={id}
          >
            <div className="session-day-heading">
              <span>DAY {String(dayIndex + 1).padStart(2, '0')}</span>
              <h2 id={id}>{date}</h2>
            </div>
            <div className="session-list">
              {sessions.map((session, index) => (
                <article className="session-card" key={session.id}>
                  <div className="session-card-top">
                    <span className="session-number">
                      SESSION {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="session-time">{session.time}</span>
                  </div>
                  <FittedText as="h3">{session.title}</FittedText>
                  <dl className="session-speaker">
                    <dt>연사</dt>
                    <FittedText as="dd">{session.speaker}</FittedText>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
