import { motion } from 'framer-motion';
import { useState } from 'react';

interface CopyIconProps {
  className?: string;
  animated?: boolean;
  onCopy?: () => void;
}

export default function CopyIcon({ className = "w-3 h-3", animated = true, onCopy }: CopyIconProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 1000);
  };

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCopy}
        className="cursor-pointer"
      >
        <motion.svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{
            scale: copied ? [1, 1.2, 1] : 1,
            rotate: copied ? [0, 10, -10, 0] : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {copied ? (
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <>
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                initial={{ pathLength: 0.5 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            </>
          )}
        </motion.svg>
      </motion.div>
    );
  }

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      onClick={handleCopy}
    >
      {copied ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      )}
    </svg>
  );
}