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
import DotsIcon from './icons/DotsIcon';
import ShareIcon from './icons/ShareIcon';
import DeleteIcon from './icons/DeleteIcon';
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

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="sidebar_search"
              onClick={() => {
                onOpenSearchModal?.();
              }}
            >
              <SearchIcon className="sidebar_search_icon" size={20} />
              {isOpen && <span>기사 히스토리 검색</span>}
            </motion.button>
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
                <a href="/user-analytics" className="sidebar_menu_link">
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
                          <button
                            className="history-item-link"
                            onClick={() =>
                              (window.location.href = `/analysis/${conversation.id}`)
                            }
                          >
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
                          </button>

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
                                  <DotsIcon size={16} />
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
                                      <ShareIcon size={16} />
                                      공유
                                    </button>
                                    <button
                                      className="dropdown-item delete"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <DeleteIcon size={16} />
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
              <a href="/about" className="sidebar_menu_link">
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
