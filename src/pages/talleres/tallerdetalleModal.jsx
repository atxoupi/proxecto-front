import React from "react";
import { motion } from "framer-motion";

const TallerDetalleModal = ({ taller, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-3"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col relative"
      >
        <div className="sticky top-0 bg-white z-20 flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-xl sm:text-2xl font-bold text-[#d4af37] pr-6">
            {taller.name}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-4 space-y-5">
          <img
            src={taller.image}
            alt={taller.name}
            className="w-full max-h-[260px] sm:max-h-[340px] object-contain rounded"
          />

          <p className="text-[#d4af37] text-center font-medium">
            {taller.description}
          </p>

          <div className="h-[1px] w-[70%] mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>



          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {taller.text}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TallerDetalleModal;
