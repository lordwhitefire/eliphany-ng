// src/components/react/ScrollReveal.tsx
import { useEffect, type FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;        // ms
  duration?: number;     // ms
  className?: string;
}

export const ScrollReveal: FC<Props> = ({
  children,
  delay = 0,
  duration = 500,
  className = ''
}) => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = document.querySelector(`[data-reveal-id="${delay}"]`);
    if (el) io.observe(el);

    return () => {
      if (el) io.unobserve(el);
    };
  }, [delay]);

  return (
    <div
      data-reveal-id={delay}
      className={`opacity-0 translate-y-6 transition-all ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};