// src/components/react/AddToCartAnimation.tsx
import { useState, type FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AddToCartAnimation: FC<Props> = ({ children }) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      {children}

      {/* ripple layers */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute pointer-events-none rounded-full bg-emerald-400 opacity-30 animate-ping"
          style={{
            left: r.x,
            top: r.y,
            width: 40,
            height: 40,
            marginLeft: -20,
            marginTop: -20,
          }}
        />
      ))}
    </div>
  );
};