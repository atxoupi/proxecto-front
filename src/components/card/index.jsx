import { motion } from "framer-motion";

export default function AnimatedCard({ title, text, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-2xl shadow-md bg-white w-[75vw]"
    >
      <h2 className="text-2xl text-[#d4af37] font-semibold mb-2 ">{title}</h2>
        <div>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-90 h-90 object-cover rounded-lg mr-4 float-left"
            style={{ float: 'left' }}
          />
        )}
        <p className="text-gray-600 ">{text}</p>
      </div>
    </motion.div>
  );
}