import { motion } from "framer-motion";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen flex justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-[#d4af37] mb-6 text-center">
          Política de Cookies
        </h1>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son archivos pequeños que se descargan en tu dispositivo
              al acceder a determinadas páginas web. Permiten almacenar información
              sobre tu navegación y mejorar tu experiencia de usuario.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              2. Tipos de cookies que usamos
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento del sitio web.</li>
              <li><strong>Cookies de análisis:</strong> nos permiten conocer el comportamiento de los usuarios y mejorar la web.</li>
              <li><strong>Cookies de personalización:</strong> almacenan tus preferencias y configuraciones.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              3. Gestión de cookies
            </h2>
            <p>
              Puedes configurar tu navegador para aceptar o rechazar todas las
              cookies, o recibir aviso cuando se envíen. Ten en cuenta que si
              desactivas algunas cookies, la funcionalidad del sitio web puede verse
              afectada.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              4. Finalidad del uso de cookies
            </h2>
            <p>
              Las cookies se utilizan para mejorar la experiencia de navegación,
              analizar el tráfico web y adaptar el contenido a tus preferencias.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              5. Contacto
            </h2>
            <p>
              Si tienes cualquier duda sobre nuestra política de cookies, puedes
              escribir a <strong>cris.nunez@estudiarconsentido.com</strong>.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

export default PoliticaCookies;
