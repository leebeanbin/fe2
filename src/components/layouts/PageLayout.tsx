'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className="grid-sidebar">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={handleToggleSidebar}
        onOpenSearchModal={handleOpenSearchModal}
      />
      <main className="main-content">{children}</main>
      {isSearchModalOpen && (
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={handleCloseSearchModal}
        />
      )}
    </div>
  );
}
