import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

function formatDate(dateStr) {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function isUpcoming(dateStr) {
  if (!dateStr) return false;
  const [year, month, day] = dateStr.split('-').map(Number);
  const tallerDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return tallerDate >= today;
}

export default function TallerCard({ title, text, image, date }) {
  const upcoming = isUpcoming(date);
  const formattedDate = formatDate(date);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm"
    >
      {image && (
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-80 object-contain"
        />
      )}
      <div className="p-4">
        {formattedDate && (
          <div className={`flex items-center gap-1 text-xs font-medium mb-2 ${upcoming ? 'text-[#d4af37]' : 'text-gray-400'}`}>
            <FaCalendarAlt className="shrink-0" />
            <span>{formattedDate}</span>
          </div>
        )}
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
