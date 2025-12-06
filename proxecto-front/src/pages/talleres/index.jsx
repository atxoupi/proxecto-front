import React from "react";
import { motion } from "framer-motion";
import TallerCard from "../../components/tallerCard/index.jsx";
import { useGetTalleresQuery } from "../../services/apiTalleres.jsx";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { FaRightToBracket } from "react-icons/fa6";

const TalleresPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    data: talleres,
    error,
    isLoading: isLoadingTalleres,
  } = useGetTalleresQuery();

  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
  className="bg-gray-100 rounded-xl shadow-lg w-[75vw] min-h-[80vh] mx-auto mt-20 p-6"
>
      <h2 className="text-2xl font-bold mb-6 text-center text-[#d4af37]">Talleres</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2 mb-6">
        {isLoadingTalleres && <p>Cargando talleres...</p>}
        {error && <p>Error al cargar los talleres.</p>}
        {talleres &&
          talleres.map((taller) => (
            <TallerCard
              key={taller.id}
              title={taller.name}
              text={taller.description}
              image={taller.image}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default TalleresPage;
