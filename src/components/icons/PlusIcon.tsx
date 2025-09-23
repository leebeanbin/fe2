import { motion } from 'framer-motion';

interface PlusIconProps {
  className?: string;
  animated?: boolean;
}

export default function PlusIcon({ className = "w-4 h-4", animated = true }: PlusIconProps) {
  if (animated) {
    return (
      <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16"
          initial={{ pathLength: 0, y: -5, opacity: 0 }}
          animate={{ pathLength: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 12h16"
          initial={{ pathLength: 0, x: -5, opacity: 0 }}
          animate={{ pathLength: 1, x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
      </motion.svg>
    );
  }

  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}