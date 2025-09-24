'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PlusIcon from './icons/PlusIcon';
import ChatIcon from './icons/ChatIcon';
import HomeIcon from './icons/HomeIcon';
import UserIcon from './icons/UserIcon';
import LoginIcon from './icons/LoginIcon';
import AboutIcon from './icons/AboutIcon';
import SearchIcon from './icons/SearchIcon';
import Logo from './Logo';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenSearchModal?: () => void;
}

export default function Sidebar({
  isOpen,
  onToggle,
  onOpenSearchModal,
}: SidebarProps) {
  const [conversations] = useState([
    {
      id: 1,
      title: 'AI 기술의 뉴스 분석 활용 확산',
      date: '2025.09.23',
      source: 'Tech News',
      favicon: '🔬',
    },
    {
      id: 2,
      title: '미디어 리터러시 교육의 중요성 대두',
      date: '2025.09.23',
      source: 'Education Today',
      favicon: '📚',
    },
    {
      id: 3,
      title: '디지털 뉴스 플랫폼의 진화',
      date: '2025.09.22',
      source: 'Digital Times',
      favicon: '📱',
    },
    {
      id: 4,
      title: '정보 홍수 시대의 팩트체킹',
      date: '2025.09.22',
      source: 'Media Watch',
      favicon: '🔍',
    },
    {
      id: 5,
      title: 'AI 뉴스 큐레이션 서비스 확산',
      date: '2025.09.21',
      source: 'Innovation Daily',
      favicon: '🤖',
    },
  ]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <>
      {/* 모바일 오버레이 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onToggle}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* 사이드바 */}
      <motion.aside
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`sidebar-area ${isOpen ? '' : 'collapsed'}`}
      >
        <div className="sidebar_inner">
          {/* 사이드바 상단 영역 */}
          <div className="sidebar_top">
            <div className="sidebar_logo_container">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggle}
                className="sidebar_logo"
                aria-label={isOpen ? '사이드바 접기' : '사이드바 펼치기'}
              >
                {isOpen ? (
                  <Logo variant="sidebar" className="logo-image" />
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="expand-icon"
                  >
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </svg>
                )}
              </motion.button>
            </div>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              href="#"
              className="sidebar_search"
              onClick={e => {
                e.preventDefault();
                onOpenSearchModal?.();
              }}
            >
              <SearchIcon className="sidebar_search_icon" size={18} />
              {isOpen && <span>기사 히스토리 검색</span>}
            </motion.a>
          </div>

          {/* 메뉴 */}
          <nav className="sidebar_nav">
            <ul className="sidebar_depth">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a href="/" className="sidebar_menu_link">
                  <div className="sidebar_ico_wrapper">
                    <HomeIcon className="sidebar_ico" size={20} />
                  </div>
                  {isOpen && <span className="sidebar_menu_text">홈화면</span>}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#" className="sidebar_menu_link">
                  <div className="sidebar_ico_wrapper">
                    <UserIcon className="sidebar_ico" size={20} />
                  </div>
                  {isOpen && (
                    <span className="sidebar_menu_text">사용자 분석페이지</span>
                  )}
                </a>
              </motion.li>
            </ul>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="history_depth_wrap"
              >
                <ul className="history_depth">
                  <li>
                    <p>기사 히스토리 분석</p>
                    <ul className="history_depth02">
                      {conversations.map((conversation, index) => (
                        <motion.li
                          key={conversation.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="history-item"
                        >
                          <a href="#" className="history-item-link">
                            <div className="history-content">
                              <div className="history-title-row">
                                <span className="history-title">
                                  {conversation.title}
                                </span>
                                <motion.div
                                  className="history-favicon"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileHover={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {conversation.favicon}
                                </motion.div>
                              </div>
                              <div className="history-meta">
                                <span className="history-date">
                                  {conversation.date}
                                </span>
                                <span className="history-separator">•</span>
                                <span className="history-source">
                                  {conversation.source}
                                </span>
                              </div>
                            </div>
                          </a>

                          <div className="trailing-pair">
                            <div className="trailing">
                              <div className="dropdown-container">
                                <motion.button
                                  className="__menu-item-trailing-btn"
                                  onClick={() =>
                                    setOpenDropdown(
                                      openDropdown === conversation.id
                                        ? null
                                        : conversation.id
                                    )
                                  }
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M15.498 8.50159C16.3254 8.50159 16.9959 9.17228 16.9961 9.99963C16.9961 10.8271 16.3256 11.4987 15.498 11.4987C14.6705 11.4987 14 10.8271 14 9.99963C14.0002 9.17228 14.6706 8.50159 15.498 8.50159Z" />
                                    <path d="M4.49805 8.50159C5.32544 8.50159 5.99689 9.17228 5.99707 9.99963C5.99707 10.8271 5.32555 11.4987 4.49805 11.4987C3.67069 11.4985 3 10.827 3 9.99963C3.00018 9.17239 3.6708 8.50176 4.49805 8.50159Z" />
                                    <path d="M10.0003 8.50159C10.8276 8.50176 11.4982 9.17239 11.4984 9.99963C11.4984 10.827 10.8277 11.4985 10.0003 11.4987C9.17283 11.4987 8.50131 10.8271 8.50131 9.99963C8.50149 9.17228 9.17294 8.50159 10.0003 8.50159Z" />
                                  </svg>
                                </motion.button>

                                {openDropdown === conversation.id && (
                                  <motion.div
                                    initial={{
                                      opacity: 0,
                                      scale: 0.95,
                                      y: -10,
                                    }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.15 }}
                                    className="dropdown-menu"
                                  >
                                    <button
                                      className="dropdown-item"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      >
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                        <polyline points="16,6 12,2 8,6" />
                                        <line x1="12" y1="2" x2="12" y2="15" />
                                      </svg>
                                      공유
                                    </button>
                                    <button
                                      className="dropdown-item delete"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      >
                                        <polyline points="3,6 5,6 21,6" />
                                        <path d="m19,6v14a2,2 0,0 1,-2,2H7a2,2 0,0 1,-2,-2V6m3,0V4a2,2 0,0 1,2,-2h4a2,2 0,0 1,2,2v2" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                      </svg>
                                      삭제
                                    </button>
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </motion.div>
            )}
          </nav>

          {/* 하단 고정 메뉴 */}
          <ul className="sidebar_bott">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="btn_login"
            >
              <a href="/auth/login" className="sidebar_menu_link">
                <div className="sidebar_ico_wrapper">
                  <LoginIcon className="sidebar_ico" size={20} />
                </div>
                {isOpen && <span className="sidebar_menu_text">Login</span>}
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#" className="sidebar_menu_link">
                <div className="sidebar_ico_wrapper">
                  <AboutIcon className="sidebar_ico" size={20} />
                </div>
                {isOpen && <span className="sidebar_menu_text">About Us</span>}
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.aside>
    </>
  );
}
