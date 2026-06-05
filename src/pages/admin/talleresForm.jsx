import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  useCreateTallerMutation,
  useUpdateTallerMutation,
  useUploadImageMutation,
} from "../../services/apiTalleres.jsx";

const TalleresForm = ({ closeModal, taller }) => {
  const isEdit = !!taller;

  const [nombre, setNombre] = useState(taller?.name || "");
  const [descripcion, setDescripcion] = useState(taller?.description || "");
  const [contenido, setContenido] = useState(taller?.text || "");
  const [fecha, setFecha] = useState(taller?.date || "");
  const [imagenFile, setImagenFile] = useState(null);
  const [imagenUrl, setImagenUrl] = useState(taller?.image || null);

  const [uploadImage] = useUploadImageMutation();
  const [createTaller, { isLoading: isCreating }] = useCreateTallerMutation();
  const [updateTaller, { isLoading: isUpdating }] = useUpdateTallerMutation();
  const isLoading = isCreating || isUpdating;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let finalImageUrl = imagenUrl;

      if (imagenFile) {
        const formData = new FormData();
        formData.append("image", imagenFile);
        const uploadResult = await uploadImage(formData).unwrap();
        finalImageUrl = uploadResult.url;
      }

      const data = {
        name: nombre,
        description: descripcion,
        text: contenido,
        image: finalImageUrl,
        date: fecha || null,
      };

      if (isEdit) {
        await updateTaller({ id: taller.id, ...data }).unwrap();
      } else {
        await createTaller(data).unwrap();
      }

      if (closeModal) closeModal();
    } catch (error) {
      console.error("Error guardando el taller:", error);
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg w-full" onSubmit={handleSubmit}>
      <h2 className="font-bold text-xl pb-4">
        {isEdit ? "Editar Taller" : "Añadir Taller"}
      </h2>

      <motion.div className="mb-4">
        <label className="block text-sm font-bold mb-2">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="shadow border rounded w-full py-2 px-3"
          required
        />
      </motion.div>

      <motion.div className="mb-4">
        <label className="block text-sm font-bold mb-2">Fecha del taller</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="shadow border rounded w-full py-2 px-3"
        />
      </motion.div>

      <motion.div className="mb-4">
        <label className="block text-sm font-bold mb-2">Descripción corta</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="shadow border rounded w-full py-2 px-3"
          rows={2}
          required
        />
      </motion.div>

      <motion.div className="mb-4">
        <label className="block text-sm font-bold mb-2">Contenido</label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          className="shadow border rounded w-full py-2 px-3"
          rows={4}
          required
        />
      </motion.div>

      <motion.div className="mb-6">
        <label className="block text-sm font-bold mb-2">Imagen</label>
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          onChange={(e) => setImagenFile(e.target.files[0])}
          className="hidden"
        />
        <label
          htmlFor="image-upload"
          className="cursor-pointer inline-flex items-center justify-center w-full px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#d4af37] hover:text-[#d4af37] transition"
        >
          {imagenFile ? "Cambiar imagen" : imagenUrl ? "Cambiar imagen actual" : "Seleccionar imagen"}
        </label>

        {(imagenFile || imagenUrl) && (
          <div className="mt-3 flex items-center gap-3">
            <img
              src={imagenFile ? URL.createObjectURL(imagenFile) : imagenUrl}
              alt="preview"
              className="w-16 h-16 object-contain rounded border"
            />
            <p className="text-sm text-gray-600 truncate">
              {imagenFile ? imagenFile.name : "Imagen actual"}
            </p>
          </div>
        )}
      </motion.div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#d4af37] font-semibold text-white p-2 rounded hover:bg-[#b5942f] transition-colors duration-200 flex items-center justify-center gap-2 w-full"
      >
        {isLoading ? "Guardando..." : isEdit ? "Guardar cambios" : "Añadir Taller"}
      </button>
    </form>
  );
};

export default TalleresForm;
