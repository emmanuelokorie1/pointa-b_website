import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface SplitHeaderProps {
  badgeText?: string;
  badgeVariant?: 'purple' | 'purple-light' | 'glass' | 'outline' | 'gray' | 'gray-glass' | 'custom';
  badgeClassName?: string;
  title: React.ReactNode;
  description: string;
  className?: string;
}

export const SplitHeader: React.FC<SplitHeaderProps> = ({
  badgeText,
  badgeVariant = 'gray',
  badgeClassName = 'mb-4',
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 ${className}`}>
      {/* Left Side Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left"
      >
        {badgeText && (
          <Badge text={badgeText} variant={badgeVariant} className={badgeClassName} />
        )}
        <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
          {title}
        </h2>
      </motion.div>

      {/* Right Side Copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full md:w-[50%] md:pt-14 text-center md:text-left"
      >
        <p className="text-neutral-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default SplitHeader;
