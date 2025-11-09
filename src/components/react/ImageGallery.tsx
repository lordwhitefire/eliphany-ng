// src/components/react/ImageGallery.tsx
import type { FC } from 'react';

interface Props {
  images: string[]; // 600w URLs
}

export const ImageGallery: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full">
      {/* main image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={images[index]}
          alt="Product"
          className="w-full h-full object-cover"
        />

        {/* zoom icon (visual only for now) */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2 text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>

      {/* thumbnail strip */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                i === index ? 'border-emerald-600' : 'border-transparent'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};