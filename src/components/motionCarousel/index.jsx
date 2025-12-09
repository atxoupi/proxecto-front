import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MotionCarousel({ images }) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  return (
    <div className="relative bg-white w-full max-w-6xl mx-auto mt-12 overflow-hidden rounded-2xl shadow-lg p-4">

      <div className="relative w-full h-[260px] sm:h-[350px] md:h-[420px]">

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 200 : -200, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}

            className="absolute inset-0 w-full h-full object-contain"

            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 120) paginate(-1);
              else if (offset.x < -120) paginate(1);
            }}
          />
        </AnimatePresence>
      </div>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white p-3 rounded-full shadow-lg text-[#d4af37]"
      >
        ◀
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white p-3 rounded-full shadow-lg text-[#d4af37]"
      >
        ▶
      </button>
    </div>
  );
}
