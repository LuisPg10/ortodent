import { motion } from 'motion/react';
import type { ImageGalleryItem } from '@/types/image-gallery-item';

import { createMansoryGrid } from '@/lib/create-mansory-grid';

interface Props {
  columns?: number;
  images: ImageGalleryItem[];
  imagesPerColumns?: number;
}

export const PinterestGallery = ({
  columns = 2,
  images,
  imagesPerColumns = 2,
}: Props) => {
  const distributedImages = createMansoryGrid(
    images,
    columns,
    imagesPerColumns
  );

  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {distributedImages.map((columnImages, colIndex) => (
        <div
          key={colIndex}
          className={`space-y-4 ${(colIndex + 1) % 2 === 0 ? 'pt-8' : ''}`}
        >
          {columnImages.map(({ alt, src }, imgIdx) => (
            <motion.div
              key={imgIdx}
              className="group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={src}
                alt={alt}
                className="h-50 w-full object-cover sm:h-72"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};
