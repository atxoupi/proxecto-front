import React, { useState } from "react";
import { motion } from "framer-motion";
import TallerCard from "../../components/tallerCard/index.jsx";
import TallerDetalleModal from "./tallerdetalleModal.jsx";
import { useGetTalleresQuery } from "../../services/apiTalleres.jsx";

function isUpcoming(dateStr) {
  if (!dateStr) return false;
  const [year, month, day] = dateStr.split('-').map(Number);
  const tallerDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return tallerDate >= today;
}

const TalleresPage = () => {
  const { data: talleres, error, isLoading } = useGetTalleresQuery();
  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);

  const proximos = talleres ? talleres.filter((t) => isUpcoming(t.date)) : [];
  const pasados = talleres ? talleres.filter((t) => !isUpcoming(t.date)) : [];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 rounded-xl shadow-lg w-[90vw] max-w-6xl min-h-[80vh] mx-auto mt-20 p-6 mb-8"
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-[#d4af37]">
          Talleres
        </h2>

        {isLoading && <p className="text-center text-gray-500">Cargando talleres...</p>}
        {error && <p className="text-center text-red-500">Error al cargar los talleres.</p>}

        {proximos.length > 0 && (
          <section className="mb-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#d4af37]"></span>
              Próximos talleres
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              {proximos.map((taller) => (
                <div
                  key={taller.id}
                  onClick={() => setTallerSeleccionado(taller)}
                  className="cursor-pointer"
                >
                  <TallerCard
                    title={taller.name}
                    text={taller.description}
                    image={taller.image}
                    date={taller.date}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {pasados.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-gray-500 mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gray-400"></span>
              {proximos.length > 0 ? 'Talleres anteriores' : 'Todos los talleres'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              {pasados.map((taller) => (
                <div
                  key={taller.id}
                  onClick={() => setTallerSeleccionado(taller)}
                  className="cursor-pointer"
                >
                  <TallerCard
                    title={taller.name}
                    text={taller.description}
                    image={taller.image}
                    date={taller.date}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {!isLoading && talleres && talleres.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            Próximamente nuevos talleres. ¡Vuelve pronto!
          </p>
        )}
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
