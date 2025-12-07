import React from "react";
import { useState } from "react";
import TallerDetalleModal from "./tallerdetalleModal.jsx";

import { motion } from "framer-motion";
import TallerCard from "../../components/tallerCard/index.jsx";
import { useGetTalleresQuery } from "../../services/apiTalleres.jsx";

const TalleresPage = () => {
  const {
    data: talleres,
    error,
    isLoading: isLoadingTalleres,
  } = useGetTalleresQuery();

  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 rounded-xl shadow-lg w-[75vw] min-h-[80vh] mx-auto mt-20 p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#d4af37]">
          Talleres
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2 mb-6">
          {isLoadingTalleres && <p>Cargando talleres...</p>}
          {error && <p>Error al cargar los talleres.</p>}
          {talleres &&
            talleres.map((taller) => (
              <div
                key={taller.id}
                onClick={() => setTallerSeleccionado(taller)}
                className="cursor-pointer"
              >
              <TallerCard
                title={taller.name}
                text={taller.description}
                image={taller.image}
              />
            </div>
            ))}
        </div>
      </motion.div>
      {tallerSeleccionado && (
        <TallerDetalleModal
          taller={tallerSeleccionado}
          onClose={() => setTallerSeleccionado(null)}
        />
      )}
    </>
  );
};

export default TalleresPage;
