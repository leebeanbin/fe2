'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import TopButton from './TopButton';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className={`grid-layout ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      <AnimatePresence mode="wait">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
          onOpenSearchModal={openSearchModal}
        />
      </AnimatePresence>

      <div className="content-area">{children}</div>

      <TopButton />
    </div>
  );
}
