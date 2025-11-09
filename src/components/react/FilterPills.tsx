// src/components/react/FilterPills.tsx
import type { FC } from 'react';

interface Pill {
  label: string;
  active: boolean;
  onClick: () => void;
}

interface Props {
  pills: Pill[];
}

export const FilterPills: FC<Props> = ({ pills }) => (
  <div className="relative w-full">
    {/* fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

    {/* scrollable row */}
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {pills.map(({ label, active, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
            active
              ? 'bg-emerald-600 text-white shadow'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);