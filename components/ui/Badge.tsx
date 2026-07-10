import React from 'react';

interface BadgeProps {
  text: string;
  variant?: 'purple' | 'purple-light' | 'glass' | 'outline' | 'gray' | 'gray-glass' | 'custom';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'purple',
  className = '',
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'purple-light':
        return 'bg-[#F8EEFF] text-[#5B0097] border border-purple-50 shadow-sm py-2 px-4 tracking-[0.12em]';
      case 'glass':
        return 'bg-white/15 text-white/90 border border-white/5 py-2 px-5 tracking-[0.12em]';
      case 'outline':
        return 'bg-primary/8 text-primary border border-primary/10 shadow-[0_2px_10px_hsla(var(--primary)/0.03)] py-1.5 px-4 tracking-widest text-[10px] sm:text-[11px]';
      case 'gray':
        return 'bg-neutral-100 text-neutral-600 py-2 px-5 tracking-[0.12em]';
      case 'gray-glass':
        return 'bg-white/80 text-neutral-600 border border-neutral-200/50 py-2 px-5 tracking-[0.12em]';
      case 'custom':
        return '';
      case 'purple':
      default:
        return 'bg-[#F3E8FF] text-[#8E24FF] py-1.5 px-4 tracking-wider';
    }
  };

  const formattedText = text.trim().startsWith('/') ? text : `/ ${text}`;

  return (
    <div
      className={`block sm:inline-block mx-auto sm:mx-0 rounded-full text-xs font-bold uppercase select-none w-fit ${getStyles()} ${className}`}
    >
      {formattedText}
    </div>
  );
};

export default Badge;
