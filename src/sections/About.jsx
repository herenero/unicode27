import { sitePath } from '../utils/paths';
import { site } from '../data/site';
import { useState } from 'react';

const images = ['assets/unicode1.jpg', 'assets/unicode2.jpg', 'assets/unicode3.jpg'].map(
  sitePath,
);

export default function About() {
  const [imageIndex, setImageIndex] = useState(0);
  const changeImage = (direction) =>
    setImageIndex((index) => (index + direction + images.length) % images.length);
  return (
    <section id="about" className="section about">
      <div className="section-label">01 / 행사 개요</div>
      <div className="about-grid">
        <div>
          <h2>
            {site.name} {site.edition}
          </h2>
          <p className="body-copy">
            UNICODE는 게임을 만드는 사람들이 경험과 영감을 나누는 인디 게임 개발자
            컨퍼런스입니다.
          </p>
        </div>
        <div
          className="about-gallery"
          role="region"
          aria-roledescription="캐러셀"
          aria-label="UNICODE 행사 사진"
        >
          <div className="about-gallery-viewport">
            <div
              className="about-gallery-track"
              style={{ transform: `translateX(-${imageIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <img
                  key={src}
                  className="about-gallery-image"
                  src={src}
                  alt={`UNICODE 행사 사진 ${index + 1}`}
                  aria-hidden={index !== imageIndex}
                />
              ))}
            </div>
          </div>
          <div className="about-gallery-controls">
            <button type="button" onClick={() => changeImage(-1)} aria-label="이전 사진">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m14 6-6 6 6 6" />
              </svg>
            </button>
            <span aria-live="polite" aria-atomic="true">
              {imageIndex + 1} / {images.length}
            </span>
            <button type="button" onClick={() => changeImage(1)} aria-label="다음 사진">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
