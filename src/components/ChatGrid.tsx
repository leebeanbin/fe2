'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SendIcon from './icons/SendIcon';
import MenuIcon from './icons/MenuIcon';
import CopyIcon from './icons/CopyIcon';
import ChatIcon from './icons/ChatIcon';
import Logo from './Logo';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatGridProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function ChatGrid({ sidebarOpen, onToggleSidebar }: ChatGridProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'user',
      content: 'ChatGPT 스타일의 정교한 그리드 레이아웃을 만들어주세요.',
      timestamp: '오후 2:30'
    },
    {
      id: 2,
      role: 'assistant',
      content: 'ChatGPT 스타일의 정교한 그리드 레이아웃을 구현해드리겠습니다. 반응형 디자인과 부드러운 애니메이션을 포함하여 현대적인 UI를 만들어보겠습니다.',
      timestamp: '오후 2:31'
    }
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        role: 'user',
        content: inputValue,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setMessages([...messages, newMessage]);
      setInputValue('');

      // 시뮬레이션: AI 응답
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          role: 'assistant',
          content: '좋은 질문이네요! 그에 대한 답변을 준비하겠습니다.',
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1500);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-white">
      {/* 헤더 */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-30"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
          >
            <MenuIcon />
          </button>
          <Logo variant="header" />
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </motion.button>
        </div>
      </motion.header>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-4xl mx-auto">
          <div className="h-full overflow-y-auto px-4 py-6">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex gap-4 max-w-[85%]">
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0">
                        <ChatIcon variant="ai" />
                      </div>
                    )}

                    <div className={`group relative ${message.role === 'user' ? 'order-1' : ''}`}>
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </div>

                      <div className={`text-xs text-gray-500 mt-1 ${
                        message.role === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {message.timestamp}
                      </div>

                      {/* 호버 액션 */}
                      <div className={`absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                        message.role === 'user' ? '-left-10' : '-right-10'
                      }`}>
                        <div className="flex gap-1">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-1 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                          >
                            <CopyIcon onCopy={() => navigator.clipboard.writeText(message.content)} />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {message.role === 'user' && (
                      <div className="flex-shrink-0">
                        <ChatIcon variant="user" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 입력 영역 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t border-gray-200 bg-white p-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex items-end gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-200 focus-within:border-blue-500 transition-colors">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-transparent border-none outline-none resize-none text-sm placeholder-gray-500 min-h-[24px] max-h-[120px]"
                rows={1}
                style={{
                  height: 'auto',
                  minHeight: '24px',
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="flex-shrink-0 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <SendIcon />
              </motion.button>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center mt-2">
            ChatGPT can make mistakes. Consider checking important information.
          </div>
        </div>
      </motion.div>
    </div>
  );
}