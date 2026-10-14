import { faqs, participation, participationNote } from '../data/participation';

export default function Guide() {
  return (
    <section id="guide" className="section guide">
      <div className="section-label">03 / PARTICIPATION</div>
      <div className="guide-grid">
        <h2>
          다음 만남을
          <br />
          준비하고 있어요.
        </h2>
        <div>
          {participation.map(({ id, label, value, showDot }) => (
            <div key={id} className="info-row">
              <span>{label}</span>
              <strong>
                {showDot && (
                  <>
                    <i className="live-dot" />{' '}
                  </>
                )}
                {value}
              </strong>
            </div>
          ))}
          <p className="guide-note">{participationNote}</p>
        </div>
      </div>
      <div className="faq">
        {faqs.map(({ id, question, answer }) => (
          <details key={id}>
            <summary>
              {question}
              <span>＋</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
