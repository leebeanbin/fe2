'use client';
import { useEffect } from 'react';

export default function TopButton() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const btn = document.getElementById('top_btn');
    if (btn) {
      btn.addEventListener('click', scrollToTop);
    }

    // cleanup
    return () => {
      if (btn) {
        btn.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <button id="top_btn" type="button">
      <span className="skip">스크롤아이콘입니다.</span>
    </button>
  );
}
