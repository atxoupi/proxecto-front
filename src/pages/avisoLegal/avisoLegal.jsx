import { motion } from "framer-motion";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen flex justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-[#d4af37] mb-6 text-center">
          Aviso Legal
        </h1>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              1. Datos del titular
            </h2>
            <p>
              En cumplimiento con el deber de información recogido en la Ley
              34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
              y del Comercio Electrónico (LSSICE), se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Titular:</strong> Cristina Núñez Touceda</li>
              <li><strong>Actividad:</strong> Terapia corporal y acompañamiento educativo</li>
              <li><strong>Correo electrónico:</strong> cris.nunez@estudiarconsentido.com</li>
              <li><strong>Teléfono:</strong> +34 623 123 049</li>
              <li><strong>Domicilios de atención:</strong></li>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Cangas: Rúa Andalucía, 10, Espazo Trebella, Cangas do Morrazo</li>
                <li>Caldas de Reis: Rúa José Salgado 41, 1F, Caldas de Reis</li>
              </ul>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              2. Usuarios
            </h2>
            <p>
              El acceso y/o uso de este sitio web atribuye la condición de USUARIO,
              que acepta, desde dicho acceso y/o uso, las presentes condiciones de uso.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              3. Uso del sitio web
            </h2>
            <p>
              El sitio web proporciona el acceso a información y servicios relacionados
              con la actividad profesional de la titular. El usuario se compromete
              a hacer un uso adecuado de los contenidos.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              4. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web, incluidos textos, imágenes, diseño,
              logotipos y código, son propiedad de la titular o cuentan con licencia
              de uso, quedando prohibida su reproducción sin autorización.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              5. Responsabilidad
            </h2>
            <p>
              La titular no se hace responsable de los daños que pudieran derivarse
              del uso de la información contenida en este sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#d4af37] mb-2">
              6. Legislación aplicable
            </h2>
            <p>
              La relación entre la titular y el usuario se regirá por la normativa
              vigente y cualquier controversia se someterá a los Juzgados y Tribunales
              que correspondan.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

export default AvisoLegal;
