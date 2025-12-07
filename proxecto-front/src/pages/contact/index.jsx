import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#d4af37] mb-4">
              Contacto
            </h1>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Gracias por tu interés en ponerte en contacto conmigo.
              Estaré encantada de escucharte, resolver tus dudas o acompañarte
              en tu proceso. Puedes escribirme directamente a través del
              formulario o mediante cualquiera de los siguientes medios.
            </p>
            <div className="space-y-3 text-gray-700">
              <a href="mailto:cris.nunez@estudiarconsentido.com" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaEnvelope /> cris.nunez@estudiarconsentido.com
              </a>

              <a href="tel:+34623123049" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaPhone /> +34 623 123 049
              </a>

              <a href="https://www.linkedin.com/in/crisnuneztouceda/" target="_blank" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaLinkedin /> LinkedIn
              </a>

              <a href="https://www.instagram.com/crisnuneztouceda/" target="_blank" className="flex items-center gap-2 hover:text-[#d4af37] transition">
                <FaInstagram /> Instagram
              </a>

              <a href="https://www.facebook.com/cristina.nuneztouceda" target="_blank" className="flex items-center gap-2 hover:text-[#d4af37] transition">
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

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 rounded-xl shadow-md p-6"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1 text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-1 text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-1 text-gray-700">
              Mensaje
            </label>
            <textarea
              rows="4"
              placeholder="Tu mensaje"
              className="w-full border rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4af37]/90 hover:bg-[#d4af37] text-white font-bold py-2 px-4 rounded transition shadow-lg"
          >
            Enviar mensaje
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
