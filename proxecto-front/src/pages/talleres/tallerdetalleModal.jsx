import React from "react";
import { motion } from "framer-motion";

const TallerDetalleModal = ({ taller, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 backdrop-blur flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">{taller.name}</h2>
        <img
          src={taller.image}
          alt={taller.name}
          className="w-full h-150 object-contain rounded mb-4"
        />
        <p className="text-[#d4af37] text-center">{taller.description}</p>
        <div className="border-t my-4 w-[50%] mx-auto"></div>
        <p className="text-gray-500">{taller.text}</p>
      </div>
    </motion.div>
  );
};

export default TallerDetalleModal;
