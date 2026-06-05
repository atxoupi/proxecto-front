import React, { useState } from "react";
import AnimatedCard from "../../components/card/index.jsx";
import CustomButton from "../../components/button/index.jsx";
import TallerCard from "../../components/tallerCard/index.jsx";
import TallerModal from "./tallerModal.jsx";
import { useLogoutMutation } from "../../services/auth";
import {
  useGetTalleresQuery,
  useDeleteTallerMutation,
} from "../../services/apiTalleres.jsx";
import { useNavigate } from "react-router-dom";
import { FaRightToBracket, FaPencil, FaTrash } from "react-icons/fa6";

const AdminPage = () => {
  const navigate = useNavigate();
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const { data: talleres, error, isLoading: isLoadingTalleres } = useGetTalleresQuery();
  const [deleteTaller] = useDeleteTallerMutation();

  const [editingTaller, setEditingTaller] = useState(null);
  const [confirmingDelete, setConfirmingDelete] = useState(null);

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTaller(id).unwrap();
      setConfirmingDelete(null);
    } catch (error) {
      console.error("Error eliminando el taller:", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center mt-20">
      <div className="flex justify-end mb-10 gap-4">
        <TallerModal />
        <CustomButton onClick={handleLogout} icon={<FaRightToBracket />}>
          {isLoggingOut ? "Saliendo..." : "Logout"}
        </CustomButton>
      </div>

      <AnimatedCard
        title="Edición"
        text="En esta sección puedes gestionar los talleres ofrecidos en la plataforma. Puedes crear nuevos talleres, actualizar la información de los existentes o eliminarlos si ya no son relevantes."
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2 mb-6">
        {isLoadingTalleres && <p>Cargando talleres...</p>}
        {error && <p>Error al cargar los talleres.</p>}
        {talleres && talleres.map((taller) => (
          <div key={taller.id} className="flex flex-col">
            <TallerCard
              title={taller.name}
              text={taller.description}
              image={taller.image}
              date={taller.date}
            />

            <div className="flex gap-2 mt-2">
              {confirmingDelete === taller.id ? (
                <div className="flex items-center justify-between w-full bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm">
                  <span className="text-red-600 font-medium">¿Eliminar?</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(taller.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold transition"
                    >
                      Sí
                    </button>
                    <button
                      onClick={() => setConfirmingDelete(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-semibold transition"
                    >
                      No
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setEditingTaller(taller)}
                    className="flex-1 flex items-center justify-center gap-1 text-sm font-medium text-[#d4af37] border border-[#d4af37] rounded-lg py-2 hover:bg-[#d4af37] hover:text-white transition"
                  >
                    <FaPencil size={12} /> Editar
                  </button>
                  <button
                    onClick={() => setConfirmingDelete(taller.id)}
                    className="flex-1 flex items-center justify-center gap-1 text-sm font-medium text-red-500 border border-red-300 rounded-lg py-2 hover:bg-red-500 hover:text-white transition"
                  >
                    <FaTrash size={12} /> Eliminar
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <TallerModal
        taller={editingTaller}
        isOpen={!!editingTaller}
        onClose={() => setEditingTaller(null)}
      />
    </div>
  );
};

export default AdminPage;
