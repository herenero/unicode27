import { sitePath } from '../../utils/paths';
import { useEffect, useRef, useState } from 'react';
import { navigation, site } from '../../data/site';

export default function Header({ currentPage }) {
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
      <a
        className="brand"
        href={sitePath('about/')}
        aria-label={`${site.name} ${site.edition} 홈`}
      >
        UNICODE {site.edition}
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
        MENU <span className="menu-icon" aria-hidden="true" />
      </button>
      <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="주 메뉴">
        {navigation.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            aria-current={href === sitePath(`${currentPage}/`) ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
