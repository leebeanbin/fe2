'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import ChatGrid from '@/components/ChatGrid';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
        />
      </AnimatePresence>

      <ChatGrid
        sidebarOpen={sidebarOpen}
        onToggleSidebar={toggleSidebar}
      />
    </div>
  );
}