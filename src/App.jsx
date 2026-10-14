import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Ticker from './components/common/Ticker';
import Hero from './sections/Hero';
import About from './sections/About';
import Program from './sections/Program';
import Guide from './sections/Guide';
import Archive from './sections/Archive';
import Updates from './sections/Updates';

// 페이지 섹션을 추가하거나 순서를 바꾸려면 이곳을 수정하세요.
export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        본문으로 이동
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Program />
        <Guide />
        <Archive />
        <Updates />
      </main>
      <Footer />
    </>
  );
}
