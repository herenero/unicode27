import { useEffect, useRef, useState } from 'react';
import { navigation, site } from '../../data/site';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  return (
    <header>
      <a className="brand" href="#" aria-label={`${site.name} ${site.edition} 홈`}>
        UNI<span className="brand-c">C</span>ODE <sup>{site.edition}</sup>
      </a>
      <button
        ref={menuButtonRef}
        className="menu"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={menuOpen}
        aria-controls="navigation"
      >
        MENU <span>{menuOpen ? '−' : '＋'}</span>
      </button>
      <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="주 메뉴">
        {navigation.map(({ href, label, highlighted }) => (
          <a
            key={href}
            href={href}
            className={highlighted ? 'nav-cta' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
            {highlighted && (
              <>
                {' '}
                <span>↗</span>
              </>
            )}
          </a>
        ))}
      </nav>
    </header>
  );
}
