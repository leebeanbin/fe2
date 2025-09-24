'use client';
import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  items: string[];
}

export default function Sidebar({ items }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <ul className="history_depth02">
      {items.map((item, index) => (
        <li
          key={index}
          className="history-item"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link href="/analysis-result" className="history-item-link">
            <span className="p_txt fw500">{item}</span>
          </Link>

          {/* 점 3개 버튼 - 호버 시에만 표시 */}
          {hoveredItem === index && (
            <div className="trailing-pair">
              <div className="trailing highlight text-token-text-tertiary">
                <button
                  tabIndex={0}
                  className="__menu-item-trailing-btn"
                  aria-label="Open conversation options"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      aria-hidden="true"
                    >
                      <path d="M15.498 8.50159C16.3254 8.50159 16.9959 9.17228 16.9961 9.99963C16.9961 10.8271 16.3256 11.4987 15.498 11.4987C14.6705 11.4987 14 10.8271 14 9.99963C14.0002 9.17228 14.6706 8.50159 15.498 8.50159Z"></path>
                      <path d="M4.49805 8.50159C5.32544 8.50159 5.99689 9.17228 5.99707 9.99963C5.99707 10.8271 5.32555 11.4987 4.49805 11.4987C3.67069 11.4985 3 10.827 3 9.99963C3.00018 9.17239 3.6708 8.50176 4.49805 8.50159Z"></path>
                      <path d="M10.0003 8.50159C10.8276 8.50176 11.4982 9.17239 11.4984 9.99963C11.4984 10.827 10.8277 11.4985 10.0003 11.4987C9.17283 11.4987 8.50131 10.8271 8.50131 9.99963C8.50149 9.17228 9.17294 8.50159 10.0003 8.50159Z"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div
                className="trailing text-token-text-tertiary"
                tabIndex={-1}
              ></div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
