import { motion } from 'framer-motion';

interface MenuIconProps {
  className?: string;
  isOpen?: boolean;
  animated?: boolean;
}

export default function MenuIcon({ className = "w-5 h-5", isOpen = false, animated = true }: MenuIconProps) {
  if (animated) {
    return (
      <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16"
          animate={{
            d: isOpen ? "M6 18L18 6" : "M4 6h16",
            rotate: isOpen ? 45 : 0
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 12h16"
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 18h16"
          animate={{
            d: isOpen ? "M6 6l12 12" : "M4 18h16",
            rotate: isOpen ? -45 : 0
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.svg>
    );
  }

  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}