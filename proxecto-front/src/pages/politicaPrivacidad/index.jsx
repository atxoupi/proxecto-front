import { motion } from "framer-motion";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen flex justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-[#d4af37] mb-6 text-center">
          Política de Privacidad
        </h1>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              1. Responsable del tratamiento
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Responsable:</strong> Cristina Núñez Touceda</li>
              <li><strong>Correo electrónico:</strong> cris.nunez@estudiarconsentido.com</li>
              <li><strong>Teléfono:</strong> +34 623 123 049</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              2. Finalidad del tratamiento de los datos
            </h2>
            <p>
              Los datos personales que el usuario facilite a través del formulario
              de contacto serán utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responder a consultas o solicitudes de información</li>
              <li>Gestionar comunicaciones con el usuario</li>
              <li>Prestar los servicios solicitados</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              3. Legitimación
            </h2>
            <p>
              La base legal para el tratamiento de tus datos es el consentimiento
              explícito del usuario al enviar el formulario de contacto.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              4. Conservación de los datos
            </h2>
            <p>
              Los datos se conservarán únicamente durante el tiempo necesario para
              atender la solicitud del usuario o mientras exista una relación
              profesional, y posteriormente durante los plazos legalmente exigidos.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              5. Destinatarios
            </h2>
            <p>
              No se cederán datos a terceros, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              6. Derechos del usuario
            </h2>
            <p>
              El usuario tiene derecho a:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar su supresión</li>
              <li>Limitar u oponerse a su tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos puede escribir a:
              <strong> cris.nunez@estudiarconsentido.com</strong>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              7. Medidas de seguridad
            </h2>
            <p>
              Se han adoptado las medidas técnicas y organizativas necesarias
              para garantizar la seguridad e integridad de los datos personales.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              8. Cambios en la política de privacidad
            </h2>
            <p>
              La titular se reserva el derecho a modificar la presente política
              de privacidad para adaptarla a novedades legislativas o jurisprudenciales.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

export default PoliticaPrivacidad;
