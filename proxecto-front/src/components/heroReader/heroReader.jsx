import React from "react";
import { motion } from "framer-motion";

export default function HeroHeader({ title, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }} 
      className="relative w-screen h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[55vh] overflow-hidden top-0">
      
      <img
        src={imageUrl}
        alt="Hero"
        className="w-full h-full object-cover object-center scale-75"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
        <h1
          className="hidden sm:block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          style={{
            textShadow: "3px 5px 9px rgba(0, 0, 0, 0.8)",
          }}
        >
          {title}
        </h1>
      </div>
    </motion.div>
  );
}
