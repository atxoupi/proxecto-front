import React from "react";
import { motion } from "framer-motion";

export default function HeroHeader({ title, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }} 
      className="relative w-[75vw] mx-auto rounded-2xl overflow-hidden h-[25vh] sm:h-[35vh] md:h-[45vh] lg:h-[55vh] bg-gray-100">

      <img
        src={imageUrl}
        alt="Hero"
        className="w-full h-full object-contain object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center px-4 pb-6 sm:pb-8">
        <h1
          className="hidden sm:block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg"
        >
          {title}
        </h1>
      </div>
    </motion.div>
  );
}
