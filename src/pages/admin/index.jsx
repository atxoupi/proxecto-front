import React, { useState, useRef } from "react";
import AnimatedCard from "../../components/card/index.jsx";
import CustomButton from "../../components/button/index.jsx";
import TallerCard from "../../components/tallerCard/index.jsx";
import TallerModal from "./tallerModal.jsx";
import { useLogoutMutation } from "../../services/auth";
import {
  useGetTalleresQuery,
  useDeleteTallerMutation,
} from "../../services/apiTalleres.jsx";
import {
  useGetCarouselQuery,
  useUploadCarouselImageMutation,
  useDeleteCarouselImageMutation,
} from "../../services/apiCarousel.jsx";
import { useNavigate } from "react-router-dom";
import { FaRightToBracket, FaPencil, FaTrash, FaImage } from "react-icons/fa6";

const AdminPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const { data: talleres, error, isLoading: isLoadingTalleres } = useGetTalleresQuery();
  const [deleteTaller] = useDeleteTallerMutation();
  const { data: carouselImages } = useGetCarouselQuery();
  const [uploadCarouselImage, { isLoading: isUploading }] = useUploadCarouselImageMutation();
  const [deleteCarouselImage] = useDeleteCarouselImageMutation();

  const [editingTaller, setEditingTaller] = useState(null);
  const [confirmingDelete, setConfirmingDelete] = useState(null);
  const [confirmingDeleteCarousel, setConfirmingDeleteCarousel] = useState(null);

  const handleCarouselUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    await uploadCarouselImage(formData);
    e.target.value = "";
  };

  const handleDeleteCarousel = async (id) => {
    await deleteCarouselImage(id);
    setConfirmingDeleteCarousel(null);
  };

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

      {/* Carrusel */}
      <div className="mt-10 max-w-6xl mx-auto px-2 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#d4af37]">Carrusel</h2>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex items-center gap-2 text-sm font-medium border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white px-4 py-2 rounded-full transition disabled:opacity-50"
          >
            <FaImage size={13} />
            {isUploading ? "Subiendo..." : "Añadir imagen"}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleCarouselUpload}
          />
        </div>

        {(!carouselImages || carouselImages.length === 0) && (
          <p className="text-gray-400 text-sm">No hay imágenes en el carrusel.</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {carouselImages && carouselImages.map((item) => (
            <div key={item.id} className="relative group rounded-xl overflow-hidden shadow-md bg-gray-100 aspect-video">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                {confirmingDeleteCarousel === item.id ? (
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-white text-xs font-medium">¿Eliminar?</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDeleteCarousel(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold"
                      >
                        Sí
                      </button>
                      <button
                        onClick={() => setConfirmingDeleteCarousel(null)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-semibold"
                      >
                        No
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmingDeleteCarousel(item.id)}
                    className="text-white bg-red-500/80 hover:bg-red-500 p-2 rounded-full transition"
                    aria-label="Eliminar imagen"
                  >
                    <FaTrash size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
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
