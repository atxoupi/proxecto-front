import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  useCreateTallerMutation,
  useUploadImageMutation,
} from "../../services/apiTalleres.jsx";

const TalleresForm = ({ closeModal }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagenFile, setImagenFile] = useState(null);

  const [uploadImage] = useUploadImageMutation();
  const [createTaller, { isLoading }] = useCreateTallerMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = null;

      if (imagenFile) {
        console.log(imagenFile);
        const formData = new FormData();
        formData.append("image", imagenFile);

        const uploadResult = await uploadImage(formData).unwrap();
        imageUrl = uploadResult.url;
        console.log(imageUrl);
      }

      await createTaller({
        name: nombre,
        description: descripcion,
        text: contenido,
        image: imageUrl,
      }).unwrap();

      setNombre("");
      setDescripcion("");
      setContenido("");
      setImagenFile(null);

      if (closeModal) closeModal();
    } catch (error) {
      console.error("Error creando el taller:", error);
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg w-full" onSubmit={handleSubmit}>
      <h2 className="font-bold text-h4 pb-4">Añadir Taller</h2>

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
        <label className="block text-sm font-bold mb-2">Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="shadow border rounded w-full py-2 px-3"
          required
        />
      </motion.div>

      <motion.div className="mb-4">
        <label className="block text-sm font-bold mb-2">Contenido</label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          className="shadow border rounded w-full py-2 px-3"
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
          className="cursor-pointer inline-flex items-center justify-center w-full px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition"
        >
          {imagenFile ? "Cambiar imagen" : "Seleccionar imagen"}
        </label>

        {imagenFile && (
          <div className="mt-3 flex items-center gap-3">
            <img
              src={URL.createObjectURL(imagenFile)}
              alt="preview"
              className="w-16 h-16 object-contain rounded border"
            />
            <p className="text-sm text-gray-600 truncate">{imagenFile.name}</p>
          </div>
        )}
      </motion.div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#d4af37] font-semibold text-white p-2 rounded hover:bg-[#b5942f] transition-colors duration-200 flex items-center justify-center gap-2 w-full"
      >
        {isLoading ? "Guardando..." : "Añadir Taller"}
      </button>
    </form>
  );
};

export default TalleresForm;
