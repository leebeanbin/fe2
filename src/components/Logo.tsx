'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  animated?: boolean;
  variant?: 'header' | 'sidebar' | 'default';
}

export default function Logo({ className = "h-8", animated = true, variant = 'default' }: LogoProps) {
  const getLogoSize = () => {
    switch (variant) {
      case 'header':
        return { width: 120, height: 32 };
      case 'sidebar':
        return { width: 80, height: 24 };
      default:
        return { width: 100, height: 28 };
    }
  };

  const { width, height } = getLogoSize();

  if (animated) {
    return (
      <motion.div
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/branding/logo/facttory.svg"
          alt="Facttory Logo"
          width={width}
          height={height}
          className="w-auto h-full object-contain"
          priority
        />
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <Image
        src="/branding/logo/facttory.svg"
        alt="Facttory Logo"
        width={width}
        height={height}
        className="w-auto h-full object-contain"
        priority
      />
    </div>
  );
}