'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import ChatGrid from '@/components/ChatGrid';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`grid-layout ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      <AnimatePresence mode="wait">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      </AnimatePresence>

      <ChatGrid onToggleSidebar={toggleSidebar} />
    </div>
  );
}
