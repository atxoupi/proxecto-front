import { motion } from "framer-motion";

export default function AnimatedCard({ title, text }) {
  return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 rounded-2xl shadow-md bg-white w-[75vw]"
        >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{text}</p>
        </motion.div>
  );
}