import { motion } from 'framer-motion';

interface ChatIconProps {
  className?: string;
  animated?: boolean;
  variant?: 'default' | 'ai' | 'user';
}

export default function ChatIcon({ className = "w-8 h-8", animated = true, variant = 'default' }: ChatIconProps) {
  const getGradient = () => {
    switch (variant) {
      case 'ai':
        return 'from-green-400 to-blue-500';
      case 'user':
        return 'from-purple-400 to-pink-500';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'ai':
        return (
          <motion.svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </motion.svg>
        );
      case 'user':
        return (
          <motion.span
            className="text-white text-xs font-medium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            U
          </motion.span>
        );
      default:
        return (
          <motion.svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </motion.svg>
        );
    }
  };

  if (animated) {
    return (
      <motion.div
        className={`${className} rounded-full bg-gradient-to-r ${getGradient()} flex items-center justify-center`}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {getIcon()}
      </motion.div>
    );
  }

  return (
    <div className={`${className} rounded-full bg-gradient-to-r ${getGradient()} flex items-center justify-center`}>
      {getIcon()}
    </div>
  );
}