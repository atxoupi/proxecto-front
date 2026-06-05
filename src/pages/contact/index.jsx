import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa6";

const ContactPage = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState(null); // null | 'enviando' | 'ok' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('enviando');
    setErrorMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_CONTACT_URL}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Error al enviar el mensaje.');
        setEstado('error');
        return;
      }

      setEstado('ok');
      setNombre("");
      setEmail("");
      setMensaje("");
    } catch {
      setErrorMsg('No se pudo conectar con el servidor.');
      setEstado('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#d4af37] mb-4">Contacto</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Gracias por tu interés en ponerte en contacto conmigo. Estaré
              encantada de escucharte, resolver tus dudas o acompañarte en tu
              proceso.
            </p>
            <div className="space-y-3 text-gray-700">
              <a href="mailto:cristinantouceda@gmail.com" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaEnvelope /> info@crisnuneztouceda.com
              </a>
              <a href="tel:+34623123049" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaPhone /> +34 623 123 049
              </a>
              <a href="https://www.linkedin.com/in/crisnuneztouceda/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/crisnuneztouceda/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaInstagram /> Instagram
              </a>
              <a href="https://www.facebook.com/cristina.nuneztouceda" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaFacebook /> Facebook
              </a>
            </div>
          </div>
          <div className="mt-8 text-gray-700">
            <h3 className="font-semibold mb-2 text-[#d4af37]">Dónde encontrarme</h3>
            <p>📍 Cangas: Rúa Andalucía, 10, Espazo Trebella, Cangas do Morrazo</p>
            <p>📍 Caldas de Reis: Rúa José Salgado 41, 1F, Caldas de Reis</p>
          </div>
        </div>

        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1 text-gray-700">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1 text-gray-700">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-1 text-gray-700">Mensaje</label>
              <textarea
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Tu mensaje"
                required
                className="w-full border rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {estado === 'ok' && (
            <p className="text-green-600 text-sm font-medium mb-3 text-center">
              ✓ Mensaje enviado correctamente. ¡Gracias!
            </p>
          )}
          {estado === 'error' && (
            <p className="text-red-500 text-sm mb-3 text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={estado === 'enviando'}
            className="w-full bg-[#d4af37]/90 hover:bg-[#d4af37] disabled:opacity-60 text-white font-bold py-2 px-4 rounded transition shadow-lg"
          >
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
