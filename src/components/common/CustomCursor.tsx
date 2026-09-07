import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClickable, setIsClickable] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Disable custom cursor on touch devices for mobile performance
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, input, select, textarea, [role="button"], .cursor-pointer'
      );
      setIsClickable(!!interactiveEl);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    /* ── Website Theme Tulip Cursor ── */
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isClickable ? 1.35 : 1,
        rotate: isClickable ? 15 : 0,
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 450, mass: 0.1 }}
    >
      <span
        className="text-2xl select-none leading-none"
        style={{
          filter: 'drop-shadow(0 2px 8px rgba(122,136,100,0.5)) drop-shadow(0 0 10px rgba(212,175,55,0.4))',
        }}
      >
        🌷
      </span>
    </motion.div>
  );
};
