'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PlusIcon from './icons/PlusIcon';
import ChatIcon from './icons/ChatIcon';
import Logo from './Logo';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [conversations] = useState([
    { id: 1, title: "새로운 채팅", timestamp: "방금 전" },
    { id: 2, title: "React 컴포넌트 디자인", timestamp: "10분 전" },
    { id: 3, title: "TypeScript 최적화", timestamp: "1시간 전" },
    { id: 4, title: "Tailwind CSS 그리드", timestamp: "2시간 전" },
    { id: 5, title: "프레이머 모션 애니메이션", timestamp: "어제" },
  ]);

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
        initial={{ x: -260 }}
        animate={{ x: isOpen ? 0 : -260 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 z-50 h-full w-64 bg-[#0c0c0c] border-r border-gray-800 md:relative md:z-0 md:translate-x-0"
      >
        <div className="flex h-full flex-col">
          {/* 헤더 */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Logo variant="sidebar" className="h-6" />
            <button
              onClick={onToggle}
              className="p-1 text-gray-400 hover:text-white transition-colors md:hidden"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 새 채팅 버튼 */}
          <div className="p-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <PlusIcon />
              새 채팅
            </motion.button>
          </div>

          {/* 대화 목록 */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <div className="space-y-1">
              {conversations.map((conversation, index) => (
                <motion.div
                  key={conversation.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <button className="w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
                    <div className="truncate text-sm font-medium">
                      {conversation.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {conversation.timestamp}
                    </div>
                  </button>

                  {/* 호버 메뉴 */}
                  <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 text-gray-500 hover:text-gray-300 transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 푸터 */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <ChatIcon variant="user" />
              <span>사용자</span>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}