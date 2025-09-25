'use client';
export default function ScrollTopButton() {
  return (
    <button
      id="top_btn"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="skip">스크롤아이콘입니다.</span>
    </button>
  );
}
