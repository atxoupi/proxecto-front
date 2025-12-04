import { motion } from "framer-motion";

export default function TallerCard({ title, text, image }) {
    
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm"
    >
      {image && (
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#d4af37] mb-1 line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
