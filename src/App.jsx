import Header from './components/layout/Header';
import About from './sections/About';
import Footer from './components/layout/Footer';
import Program from './sections/Program';
import Guide from './sections/Guide';
import Hero from './sections/Hero';
import Organization from './sections/Organization';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { pageFromPath } from './utils/paths';

const pages = { about: About, program: Program, guide: Guide };
const readPage = () => pageFromPath(window.location.pathname) || 'about';

export default function App() {
  const [page, setPage] = useState(readPage);
  const mainRef = useRef(null);
  const navigationPending = useRef(false);
  const Page = pages[page] || About;

  useEffect(() => {
    const onPopState = () => setPage(readPage());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useLayoutEffect(() => {
    if (!navigationPending.current) return;
    navigationPending.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  }, [page]);

  function navigate(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const link = event.target.closest('a');
    if (
      !link ||
      link.hasAttribute('download') ||
      (link.target && link.target !== '_self')
    )
      return;
    const url = new URL(link.href);
    if (url.origin !== window.location.origin || url.hash || url.search) return;
    const nextPage = pageFromPath(url.pathname);
    if (!Object.hasOwn(pages, nextPage)) return;
    event.preventDefault();
    if (nextPage === page) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    window.history.pushState(null, '', url.pathname);
    navigationPending.current = true;
    setPage(nextPage);
  }

  return (
    <div className="app-shell" onClick={navigate}>
      <a className="skip" href="#main">
        본문으로 이동
      </a>
      <Header currentPage={page} />
      <main id="main" key={page} ref={mainRef} tabIndex={-1}>
        {Page === About && <Hero />}
        <Page />
        {Page === About && <Organization />}
      </main>
      <Footer />
    </div>
  );
}
