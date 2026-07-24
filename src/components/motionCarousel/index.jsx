import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function MotionCarousel({ images }) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  const goTo = (i) => setIndex([i, i > index ? 1 : -1]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-white">
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-6 rounded-2xl overflow-hidden drop-shadow-lg"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, { offset }) => {
              if (offset.x > 80) paginate(-1);
              else if (offset.x < -80) paginate(1);
            }}
          >
            <img src={images[index]} alt="" className="w-full h-full object-contain" />
          </motion.div>
        </AnimatePresence>

        {/* Flechas */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#d4af37] p-2.5 rounded-full shadow-md transition z-10"
          aria-label="Anterior"
        >
          <FaChevronLeft size={14} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#d4af37] p-2.5 rounded-full shadow-md transition z-10"
          aria-label="Siguiente"
        >
          <FaChevronRight size={14} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? 'w-6 h-2 bg-[#d4af37]'
                : 'w-2 h-2 bg-gray-300 hover:bg-[#d4af37]/50'
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
